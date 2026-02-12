import './skills.css';
import { BackButton } from '../../components/backButton/BackButton';

const Skills = () => {
  return (
    <section className="skillsPage">
      <h2 className="aboutTitle">MIS SKILLS</h2>
      <div className="othersGridSkills">
        <div className="miniFlipCard">
          <div className="miniFlipInner">
            <div className="miniFlipFront">
              <img src="/img/skills/html.png" alt="HTML" />
            </div>
            <div className="miniFlipBack">
              <p>HTML</p>
              <p>
                Estructura base de páginas web, utilizado en prácticamente todas mis prácticas y proyectos.
              </p>
            </div>
          </div>
        </div>
        <div className="miniFlipCard">
          <div className="miniFlipInner">
            <div className="miniFlipFront">
              <img src="/img/skills/css.png" alt="CSS" />
            </div>
            <div className="miniFlipBack">
              <p>CSS</p>
              <p>
               Base principal de mi maquetación, centrado en diseño visual y estructura responsive.
              </p>
            </div>
          </div>
        </div>
        <div className="miniFlipCard">
          <div className="miniFlipInner">
            <div className="miniFlipFront">
              <img src="/img/skills/js.png" alt="JavaScript" />
            </div>
            <div className="miniFlipBack">
              <p>JavaScript</p>
              <p>
                Primer contacto con la lógica de programación y base que utilizo junto a librerías como React y Node.
              </p>
            </div>
          </div>
        </div>
        <div className="miniFlipCard">
          <div className="miniFlipInner">
            <div className="miniFlipFront">
              <img src="/img/skills/bootstrap.png" alt="Bootstrap" />
            </div>
            <div className="miniFlipBack">
              <p>Bootstrap</p>
              <p>
               Maquetación rápida en proyectos sencillos y prácticas menores.
              </p>
            </div>
          </div>
        </div>
        <div className="miniFlipCard">
          <div className="miniFlipInner">
            <div className="miniFlipFront">
                <img src="/img/skills/figma.png" alt="Figma" />
            </div>
            <div className="miniFlipBack">
              <p>Figma</p>
              <p>
                Diseño de interfaces y planificación visual antes del desarrollo.
              </p>
            </div>
          </div>
        </div>

        <div className="miniFlipCard">
          <div className="miniFlipInner">
            <div className="miniFlipFront">
               <img src="/img/skills/express-js.png" alt="Express-JS" />
            </div>
            <div className="miniFlipBack">
              <p>Express.js</p>
              <p>Creación de rutas, middlewares y controladores para APIs backend.</p>
            </div>
          </div>
        </div>

        <div className="miniFlipCard">
          <div className="miniFlipInner">
            <div className="miniFlipFront">
                <img src="/img/skills/node.png" alt="Node" />
            </div>
            <div className="miniFlipBack">
              <p>Node.js</p>
              <p>
               Primer backend desarrollado en solitario y base para el servidor de proyectos más grandes.
              </p>
            </div>
          </div>
        </div>
        <div className="miniFlipCard">
          <div className="miniFlipInner">
            <div className="miniFlipFront">
                <img src="/img/skills/react.png" alt="REACT" />
            </div>
            <div className="miniFlipBack">
              <p>React</p>
              <p>
               Desarrollo de interfaces SPA usando estados y efectos; mi proyecto más completo está realizado con React.
              </p>
            </div>
          </div>
        </div>
        <div className="miniFlipCard">
          <div className="miniFlipInner">
            <div className="miniFlipFront">
                <img src="/img/skills/mysql.png" alt="MYSQL" />
            </div>
            <div className="miniFlipBack">
              <p>MySQL</p>
              <p>
                Gestión de bases de datos relacionales, consultas y conexión con el backend.
              </p>
            </div>
          </div>
        </div>
        <div className="miniFlipCard">
          <div className="miniFlipInner">
            <div className="miniFlipFront">
                <img src="/img/skills/scrum.png" alt="SCRUM" />
            </div>
            <div className="miniFlipBack">
              <p>SCRUM</p>
              <p>
                Trabajo en equipo organizado en pequeñas fases y objetivos.
              </p>
            </div>
          </div>
        </div>
        <div className="miniFlipCard">
          <div className="miniFlipInner">
            <div className="miniFlipFront">
                <img src="/img/skills/trello.png" alt="Trello" />
            </div>
            <div className="miniFlipBack">
              <p>Trello</p>
              <p>
                Gestión y seguimiento de tareas durante el desarrollo de proyectos.
              </p>
            </div>
          </div>
        </div>
        <div className="miniFlipCard">
          <div className="miniFlipInner">
            <div className="miniFlipFront">
                <img src="/img/skills/zod.jpg" alt="ZOD" />
            </div>
            <div className="miniFlipBack">
              <p>Zod</p>
              <p>
               Validación de datos de entrada, como formularios para solicitud de citas.
              </p>
            </div>
          </div>
        </div>
        <div className="miniFlipCard">
          <div className="miniFlipInner">
            <div className="miniFlipFront">
                <img src="/img/skills/jsonwebtoken.png" alt="Json Web Token" />
            </div>
            <div className="miniFlipBack">
              <p>Json Web Token</p>
              <p>
                Implementación de autenticación y control de acceso de usuarios.
              </p>
            </div>
          </div>
        </div>
        <div className="miniFlipCard">
          <div className="miniFlipInner">
            <div className="miniFlipFront">
                <img src="/img/skills/nodemailer.jpg" alt="Nodemailer" />
            </div>
            <div className="miniFlipBack">
              <p>Nodemailer</p>
              <p>
                Envío de correos de confirmación, cancelación y verificación de usuarios.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BackButton />
    </section>
  );
};
export default Skills;
