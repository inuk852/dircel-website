import './Contact.css';
import { useState } from 'react';
import { sendEmail } from '../utils/sendEmail';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await sendEmail(formData);

    alert(result.message);
    if (result.success) {
      setFormData({ name: '', email: '', message: '' });
    }

    setLoading(false);
  };

  return (
    <section id="contacto" className="contact">
    <div className="container">

      <div className="content-grid">
        
        {/* 🟦 Formulario */}
      <h2 className="contact-title">Contáctanos</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h4>AGENDA TU CITA</h4>

          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </form>

        {/* 🟩 Información de contacto */}
        <div className="contact-info">
          <h5>Horario de atención:</h5>
          <p>Lunes a Viernes 9:00 a.m. a 4:00 p.m. Jornada continua</p>

          <h5>Dirección:</h5>
          <p>Carrera 42B #76-09, Local 4</p>

          <h5>Teléfonos:</h5>
          <p>📞 3117026584</p>

          <h5>Email:</h5>
          <p>dircelagobadosasociados@gmail.com</p>
        </div>

      </div>
    </div>
  </section>
  );
}

export default Contact;