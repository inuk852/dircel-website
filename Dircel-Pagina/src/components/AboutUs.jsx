import './AboutUs.css';
import quienessomosimg from '../images/quienessomos.jpg';
import misionyvisionimg from '../images/misionyvision.png';
import valorescorporativosimg from '../images/valorescorporativos.jpg';
import abogado1 from '../images/Nelino.png';
import abogada2 from '../images/Abis.png';
import abogado3 from '../images/Moises.png';

function About() {
  return (
    <section id="nosotros" className="about">
      <div className="about-container">

        {/* Bloque 1 */}
        <div className="about-block">
          <div className="about-text">
            <h3>Quiénes Somos</h3>
            <p>
              En <strong>Dircel Abogados Asociados S.A.S</strong> somos una firma especializada en materia pensional, comprometida en defender los derechos de nuestros clientes frente al sistema de seguridad social. 
              Brindamos asesoría integral en tramites de reconocimiento de pensiones, reliquidaciones, indemnizaciones substitutivas y/o devolución de saldo y demás temas relacionados con el régimen pensional publico y privado, garantizando soluciones jurídicas efectivas y personalizadas.
            </p>
          </div>
          <div
            className="about-img"
            style={{ backgroundImage: `url(${quienessomosimg})` }}
          ></div>
        </div>

        {/* Bloque 2 */}
        <div className="about-block reverse">
          <div className="about-text">
            <h3>Misión y Visión</h3>
            <p>
              <strong>Misión</strong>
              <br />
              Ofrecer asesoría y acompañamiento jurídico especializado en materia pensional, con compromiso, ética y cercanía, para garantizar la protección de los derechos de nuestros clientes y su tranquilidad frente al sistema de seguridad social.
              <br />
              <br />
              <strong>Visión</strong>
              <br />
              Consolidarnos como una firma jurídica líder en derecho pensional a nivel nacional e internacional, reconocida por su excelencia profesional, compromiso humano y capacidad para brindar soluciones jurídicas confiables a los colombianos dentro y fuera del país.
            </p>
          </div>
          <div
            className="about-img"
            style={{ backgroundImage: `url(${misionyvisionimg})` }}
          ></div>
        </div>

        {/* Bloque 3 */}
        <div className="about-block">
          <div className="about-text">
            <h3>Valores corporativos</h3>
            <p>
              ⦁	Lealtad - Actuamos con fidelidad hacia nuestros clientes, defendiendo sus intereses con transparencia, ética y respeto por la verdad jurídica.
              <br />
              <br />
              ⦁	Compromiso - Asumimos cada caso con responsabilidad, dedicación y constancia, garantizando un acompañamiento cercano y resultados que reflejen nuestra vocación de servicio.
              <br />
              <br />
              ⦁	Confianza - Construimos relaciones solidas basadas en la transparencia, el cumplimiento y la credibilidad de nuestros actos.
            </p>
          </div>
          <div
            className="about-img"
            style={{ backgroundImage: `url(${valorescorporativosimg})` }}
          ></div>
        </div>

        {/* Bloque 4 */}
         <div className="team-section">
          <h2>Nuestro Equipo de Trabajo</h2>
          <div className="team-grid">

            <div className="team-card">
              <div
                className="team-photo"
                style={{ backgroundImage: `url(${abogado1})` }}
              ></div>
              <h4>Nelhiño Dircel Bolaño Miranda</h4>
              <p className="team-role">Director general</p>
              <p>
                Abogado especialista en derecho publico y Magister en derecho procesal.
                Cuenta con amplia experiencia en la dirección y gestión de procesos judiciales en materia laboral, administrativa y pensional. Su trayectoria profesional se destaca por el compromiso con la defensa de los derechos ciudadanos y la implementación de estrategias jurídicas efectivas en el ámbito nacional e internacional.
              </p>
            </div>

            <div className="team-card">
              <div
                className="team-photo"
                style={{ backgroundImage: `url(${abogada2})` }}
              ></div>
              <h4>Abis Marcela Garcia Ricardo</h4>
              <p className="team-role">Gerente general</p>
              <p>
                Especialista y magister en derecho laboral y seguridad social y docente universitaria. Con amplia experiencia en derecho laboral, pensiones, asuntos de familia y asesoría a entes territoriales.
              </p>
            </div>

            <div className="team-card">
              <div
                className="team-photo"
                style={{ backgroundImage: `url(${abogado3})` }}
              ></div>
              <h4>Moises Abraham Bolaño Garcia</h4>
              <p className="team-role">Dependiente Judicial</p>
              <p>
                Estudiante de derecho de la universidad del norte de barranquilla, encargado del soporte administrativo y gestión de procesos judiciales de la firma. Brinda asistencia efectiva en tramites, organización documental y atención a clientes, garantizando el buen funcionamiento de las actividades jurídicas. 
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
