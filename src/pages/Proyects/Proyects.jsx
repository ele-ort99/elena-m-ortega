import './proyects.css';
import { BackButton } from '../../components/backButton/BackButton';

const Proyects = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <>
      <div className="proyectsPage">
        <h2 className="proyectsTitle">MIS PROYECTOS</h2>
        <div className="proyectsGrid">
          <div className="proyectsCard">
            <img src={`${base}img/proyects/bruverportada.png`} alt="Brüver" />
            <a className="linkcards" href="https://youtu.be/Rd2zsGAc2p8?t=1264">
              <h3>Brüver</h3>
            </a>
            <p>
              Página web desarrollada en equipo para una peluquería canina y
              felina, que incluye tratamientos de estética, nutrición y
              veterinaria. En ella puedes registrarte, crear tus propias
              mascotas y pedir cita solicitando servicios concretos, así como el
              empleado y la fecha que desees. De igual forma, los trabajadores
              podrán registrarse y ver sus horarios laborales e historial de
              citas.
            </p>
          </div>

          <div className="proyectsCard">
            <img
              src={`${base}img/proyects/games.png`}
              alt="Directorio del multijuego"
            />
            <a
              className="linkcards"
              href="https://youtu.be/Wx_Ke_tHliI?si=W5TGBNad8758Iu8j"
            >
              <h3>Directorio del Multijuego</h3>
            </a>

            <p>
              En esta página web podrás registrarte como jugador y añadir juegos
              de mesa y/o telemáticos a tu perfil, dando datos y reseñas
              personales. Para añadir un juego, necesitas dar información sobre
              el título, plataforma, año de creación, entre otros. Además podrás
              ver los juegos de los demás perfiles registrados.
            </p>
          </div>

          <div className="proyectsCard">
            <img src={`${base}img/proyects/simpsons.png`} alt="The Simpsons" />
            <a
              className="linkcards"
              href="https://ele-ort99.github.io/thesimpsons/"
            >
              <h3>The Simpsons</h3>
            </a>
            <p>
              En esta sencilla web podrás ver los diferentes personajes de la
              famosa serie "The Simpsons". Aleatoriamente, a pulsar el botón,
              aparecerán distintos tríos de personajes con algunas de sus frases
              más icónicas.
            </p>
          </div>

          <div className="proyectsCard">
            <img
              src={`${base}img/proyects/calculadora.png`}
              alt="Calculadora"
            />
            <a
              className="linkcards"
              href="https://ele-ort99.github.io/Calculadora-present/"
            >
              <h3>Calculadora</h3>
            </a>
            <p>
              Uno de mis primeros proyectos. Es una sencilla calculadora en la
              que puedes hacer cuentas matemáticas.
            </p>
          </div>
        </div>
        <BackButton />
      </div>
    </>
  );
};

export default Proyects;
