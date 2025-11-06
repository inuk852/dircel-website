import './Services.css';
import pensiondevejezinvalidezysobrevivienteimg from '../images/pensiondevejezinvalidezysobreviviente.jpeg';
import retroactivosimg from '../images/retroactivos.webp';
import interesesmoratorioseindemnizacionimg from '../images/interesesmoratorioseindemnizacion.jpg';
import trasladoderegimenimg from '../images/trasladoderegimen.webp';
import bonospensionalesimg from '../images/bonospensionales.webp';
import pensionfamiliarimg from '../images/pensionfamiliar.jpg';
import temaspensionalesdelregimenespecialyexceptuadoimg from '../images/temaspensionalesdelregimenespecialyexceptuado.webp';

function Services() {
    // 🔹 Función para hacer scroll hasta la sección de contacto
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="services">
      <div className="container services-content">
        <h2>Nuestros Servicios Legales</h2>

        <div className="service-grid">
          <div className="service-card">
            <div
              className="service-image"
              style={{ backgroundImage: `url(${pensiondevejezinvalidezysobrevivienteimg})` }}
            ></div>
            <h3>Pensión de vejez, invalidez y sobreviviente</h3>
            <button className="service-btn" onClick={handleScrollToContact}>Más información</button>
          </div>

          <div className="service-card">
            <div
              className="service-image"
              style={{ backgroundImage: `url(${retroactivosimg})` }}
            ></div>
            <h3>Retroactivos</h3>
            <button className="service-btn" onClick={handleScrollToContact}>Más información</button>
          </div>

          <div className="service-card">
            <div
              className="service-image"
              style={{ backgroundImage: `url(${interesesmoratorioseindemnizacionimg})` }}
            ></div>
            <h3>Intereses moratorios e indemnización</h3>
            <button className="service-btn" onClick={handleScrollToContact}>Más información</button>
          </div>

          <div className="service-card">
            <div
              className="service-image"
              style={{ backgroundImage: `url(${trasladoderegimenimg})` }}
            ></div>
            <h3>Traslado de régimen</h3>
            <button className="service-btn" onClick={handleScrollToContact}>Más información</button>
          </div>

          <div className="service-card">
            <div
              className="service-image"
              style={{ backgroundImage: `url(${bonospensionalesimg})` }}
            ></div>
            <h3>Bonos pensionales</h3>
            <button className="service-btn" onClick={handleScrollToContact}>Más información</button>
          </div>

          <div className="service-card">
            <div
              className="service-image"
              style={{ backgroundImage: `url(${pensionfamiliarimg})` }}
            ></div>
            <h3>Pensión familiar</h3>
            <button className="service-btn" onClick={handleScrollToContact}>Más información</button>
          </div>

          <div className="service-card">
            <div
              className="service-image"
              style={{ backgroundImage: `url(${temaspensionalesdelregimenespecialyexceptuadoimg})` }}
            ></div>
            <h3>Temas pensionales del régimen especial y exceptuado</h3>
            <button className="service-btn" onClick={handleScrollToContact}>Más información</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
