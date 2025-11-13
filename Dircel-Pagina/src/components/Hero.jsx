import { useState, useEffect } from 'react';
import './Hero.css';
import portadasobrenosotros from '../images/portraitAboutUS.webp';
import portadaservicios from '../images/portraitServices.jpg';
import portadacontacto from '../images/portraitContact.jpg';

function Hero() {
  // Usamos las variables importadas directamente
  const slides = [
    { id: 0, src: portadasobrenosotros, alt: 'Equipo Dircel', target: 'nosotros' },
    { id: 1, src: portadaservicios, alt: 'Nuestros servicios', target: 'servicios' },
    { id: 2, src: portadacontacto, alt: 'Contáctanos', target: 'contacto' }
  ];

  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex(prev => (prev + 1) % slides.length);
        setAnimating(false);
      }, 450); // anim duration
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  // cuando el usuario cliquea la miniatura o la imagen principal
  const handleSlideClick = (target) => {
    // intenta hacer scroll suave a la sección objetivo
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // fallback: si no existe la sección, puedes usar anclas (#about)
      window.location.hash = `#${target}`;
    }
  };

  // Maneja los cambios de los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const API_URL = import.meta.env.VITE_API_URL || "https://dircel-website.onrender.com";

  // Envía los datos al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        alert("✅ ¡Mensaje enviado con éxito!");
        setShowModal(false);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("❌ Hubo un error al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ No se pudo conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="inicio" className="hero hero-slider">
      <div className="container hero-content slider-layout">
        {/* IZQUIERDA: slider / imagen */}
        <div className="slider-area" aria-hidden={false}>
          <div className={`slide-image ${animating ? 'anim' : ''}`}>
            <img
              src={slides[index].src}
              alt={slides[index].alt}
              onClick={() => handleSlideClick(slides[index].target)}
              draggable="false"
            />
            {/* degradado hacia el botón */}
            <div className="image-gradient" aria-hidden="true" />
          </div>

          {/* thumbnails (pequeñas) para elegir slide */}
          <div className="thumbnails" role="navigation" aria-label="Seleccionar imagen">
            {slides.map((s, i) => (
              <button
                key={s.id}
                className={`thumb ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Ir a ${s.alt}`}
              >
                <img src={s.src} alt={s.alt} draggable="false" />
              </button>
            ))}
          </div>
        </div>

        {/* DERECHA: texto + botón */}
        <div className="hero-text-area">
          <h2 className="hero-title">¿AÚN NO HA RECLAMADO SUS DERECHOS PENSIONALES?</h2>
          <p className="hero-sub">
            EN DIRCEL ABOGADOS ASOCIADOS S.A.S. <br />
            Te ayudamos a reclamarlo.
          </p>

          <button
            className="cta-button"
            onClick={() => setShowModal(true)}
            aria-haspopup="dialog"
          >
            Agenda tu consulta
          </button>
        </div>

        {/* Modal (igual que antes) */}
        {showModal && (
          <div
            id="contact-modal"
            className="modal-overlay"
            onClick={() => setShowModal(false)}
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>Agenda tu consulta</h3>
              <p>Déjanos tus datos y te contactaremos en breve.</p>

              <form className="modal-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Describe brevemente tu caso"
                  value={formData.message}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="send-btn"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "Enviar"}
                </button>
              </form>

              <button
                className="close-btn"
                onClick={() => setShowModal(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
