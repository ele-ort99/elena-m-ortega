import './about.css';
import { BackButton } from '../../components/backButton/BackButton';


const About = () => {
  const base = import.meta.env.BASE_URL;
  return (
    <section className="aboutPage">
      <section>
        <div className="first">
          <div className="textAbout">
            <h3 className="aboutTitle">SOBRE MÍ</h3>
            <p>
              Mi nombre es Elena, tengo 26 años y soy natural de Málaga. Nací en
              el municipio de Ardales, aunque hace algunos años me trasladé a la
              capital con el objetivo de ampliar mis oportunidades personales y
              profesionales. <br /> <br />
              Entre mis principales aficiones se encuentran la lectura —siempre
              tengo algún libro en la recámara—, los videojuegos en distintas
              plataformas como Nintendo Switch y PC, así como descubrir series y
              películas diferentes. Los principales adjetivos que usaría para
              describirme serían: tranquila, familiar, rutinaria y organizada.
            </p>
          </div>
          <div className="imgEle">
            <img src={`${base}img/about/elena.jpg`} alt="Elena" />
          </div>
        </div>
      </section>

      <article id="formations">
        <section className="formationsSect">
          <h3 className="aboutTitle">Formación Académica</h3>
          <h4>Bootcamp Full Stack Developer</h4>
          <p className="subtitle">2025/2026</p>
          <p className="subtitle">Sócratech</p>
          <div className="flipCard">
            <div className="flipCardInner">
              <div className="flipCardFront">
                <img src={`${base}img/about/socratech.png`} alt="Sócratech" />
              </div>

              <div className="flipCardBack">
                <p>
                  Mi última y más intensa formación académica fue de la mano de
                  Sócratech. Durante unos meses mis días estaban llenos de horas
                  y horas de código, documentación y lógica. Fue un proceso
                  duro, pero lo repetiría sin dudarlo.
                </p>
              </div>
            </div>
          </div>

          <h4>Máster en Psicopedagogía</h4>
          <p className="subtitle">2022-2023</p>
          <p className="subtitle">UMA</p>
          <div className="flipCard">
            <div className="flipCardInner">
              <div className="flipCardFront">
                 <img src={`${base}img/about/uma.png`} alt="UMA" />
              </div>

              <div className="flipCardBack">
                <p>
                  Utilicé este recurso para ampliar mis conocimientos sobre la
                  educación y el ámbito psicológico dentro del sistema
                  educativo.
                </p>
              </div>
            </div>
          </div>

          <h4>Grado en Magisterio de Primaria</h4>
          <p className="subtitle">2027-2021</p>
          <p className="subtitle">UMA</p>
          <div className="flipCard">
            <div className="flipCardInner">
              <div className="flipCardFront">
                <img src={`${base}img/about/cammia.png`} alt="CAMMIA" />
              </div>

              <div className="flipCardBack">
                <p>
                  Me especialicé en escuela inclusiva y Atención a la
                  diversidad. Este grado me permitió ver cómo se realiza a nivel
                  interno el proceso de aprendizaje y cuáles son las
                  dificultades que pueden darse, así como sus posibles medidas
                  preventivas y soluciones.
                </p>
              </div>
            </div>
          </div>

          <h4 className="others">Mis certificaciones</h4>
          <div className="othersGridAbout">
            <div className="miniFlipCardAbout">
              <div className="miniFlipInnerAbout">
                <div className="miniFlipFrontAbout">
                  <img src={`${base}img/about/udemy.png`} alt="Udemy" />
                </div>
                <div className="miniFlipBackAbout">
                  <p>JavaScriptTotal</p>
                  <p>Udemy</p>
                </div>
              </div>
            </div>

            <div className="miniFlipCardAbout">
              <div className="miniFlipInnerAbout">
                <div className="miniFlipFrontAbout">
                  <img src={`${base}img/about/ieducando.png`} alt="IEducando" />
                </div>
                <div className="miniFlipBackAbout">
                  <p>IEducando Level 2</p>
                  <p>Herramientas de ofimática y programación</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="formationsSect">
          <h3 className="aboutTitle">Experiencia Profesional</h3>

          <h4>Desarrolladora Full Stack</h4>
          <p className="subtitle">2026</p>
          <p className="subtitle">Brüver</p>
          <div className="flipCard">
            <div className="flipCardInner">
              <div className="flipCardFront">
                <img src={`${base}img/about/bruver.png`} alt="Brüver" />
              </div>
              <div className="flipCardBack">
                <ul>
                  <li>Desarrollo Aplicación Web</li>
                  <li>Trello y Figma</li>
                  <li>Trabajo en equipo</li>
                  <li>CSS - Bootstrap</li>
                  <li>Nodemailer</li>
                  <li>Creación de modales</li>
                  <li>React Calendar</li>
                </ul>
              </div>
            </div>
          </div>

          <h4>Monitora</h4>
          <p className="subtitle">2022-Actual</p>
          <p className="subtitle">Mediterránea S.L. - Serunion - CEPER</p>
          <div className="flipCard">
            <div className="flipCardInner">
              <div className="flipCardFront">
                <img src={`${base}img/about/mediterránea.jpg`} alt="Mediterránea" />
              </div>
              <div className="flipCardBack">
                <ul>
                  <li>Atención de cara al público</li>
                  <li>Trabajo en equipo</li>
                  <li>Toma de decisiones</li>
                  <li>Responsabilidad</li>
                  <li>Formación de nuevas incorporaciones</li>
                  <li>Grupos de menores y adultos a mi cargo</li>
                </ul>
              </div>
            </div>
          </div>

          <h4>Maestra de Apoyo</h4>
          <p className="subtitle">2023-2025</p>
          <p className="subtitle">CEIP Pintor Revello de Toro</p>
          <div className="flipCard">
            <div className="flipCardInner">
              <div className="flipCardFront">
                 <img src={`${base}img/about/apa.png`} alt="APA" />
              </div>
              <div className="flipCardBack">
                <ul>
                  <li>Contacto con familiares</li>
                  <li>Contacto con Instituciones Públicas</li>
                  <li>Formaciones extra</li>
                  <li>Responsabilidad</li>
                  <li>Seguimiento diario</li>
                  <li>Tareas administrativas</li>
                </ul>
              </div>
            </div>
          </div>

          <h4 className="others">Otros trabajos</h4>
          <div className="othersGridAbout othersGridAboutWorks">
            <div className="miniFlipCardAbout">
              <div className="miniFlipInnerAbout">
                <div className="miniFlipFrontAbout">
                  <img src={`${base}img/about/limpieza.png`} alt="Limpieza" />
                </div>
                <div className="miniFlipBackAbout">
                  <p>Limpieza</p>
                  <p>
                    Responsabilidades relacionadas con limpieza y mantenimiento.
                  </p>
                </div>
              </div>
            </div>

            <div className="miniFlipCardAbout">
              <div className="miniFlipInnerAbout">
                <div className="miniFlipFrontAbout">
                   <img src={`${base}img/about/ventas.png`} alt="Ventas" />
                </div>
                <div className="miniFlipBackAbout">
                  <p>Cara al público</p>
                  <p>Puesto de venta</p>
                </div>
              </div>
            </div>

            <div className="miniFlipCardAbout">
              <div className="miniFlipInnerAbout">
                <div className="miniFlipFrontAbout">
                  <img src={`${base}img/about/campamentos.png`} alt="Campamentos" />
                </div>
                <div className="miniFlipBackAbout">
                  <p>Campamentos</p>
                  <p>
                    Organización y supervisión de actividades para niños y
                    jóvenes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
      <BackButton />
    </section>
  );
};
export default About;
