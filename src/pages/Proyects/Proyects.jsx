import './proyects.css';
import { BackButton } from '../../components/backButton/BackButton';


const Proyects = () => {
  return (
    <>
      <div className="proyectsPage">
        <h2 className="proyectsTitle">MIS PROYECTOS</h2>
        <div className="proyectsGrid">
          <div className="proyectsCard">
            <img src="/img/proyects/bruverportada.png" alt="Brüver" />
            <h3>Brüver</h3>
            <p>
              Página web desarrollada en equipo para una peluquería canina y felina,
              que incluye tratamientos de estética, nutrición y veterinaria. 
              En ella puedes registrarte, crear tus propias mascotas y pedir cita solicitando servicios concretos, así como el empleado y la fecha que desees. De igual forma, los trabajadores podrán registrarse y ver sus horarios laborales e historial de citas.
            </p>
          </div>
          <div className="proyectsCard">
            <img src="/img/proyects/games.png" alt="Directorio del multijuego" />
            <h3>Directorio del Multijuego</h3>
            <p>
              En esta página web podrás registrate como jugador y añadir juegos de mesa y/o telemáticos a tu perfil, dando datos y reseñas personales. Para añadir un juego, necesitas dar información sobre el título, plataforma,
              año de creación, entre otros. Además podrás ver los juegos de los demás perfiles registrados.
            </p>
          </div>
          <div className="proyectsCard">
            <img src="/img/proyects/simpsons.png" alt="The Simpsons" />
            <h3>The Simpsons</h3>
            <p>
              En esta sencilla web podrás ver los diferentes personajes de la famosa serie "The Simpsons". Aleatoriamente, a pulsar el botón, aparecerán distintos tríos de personajes con algunas de sus frases más icónicas.
            </p>
          </div>
          <div className="proyectsCard">
            <img src="/img/proyects/calculadora.png" alt="Calculadora" />
            <h3>Calculadora</h3>
            <p>
              Uno de mis primeros proyectos. Es una sencilla calculadora en la que puedes hacer cuentas matemáticas.
            </p>
          </div>
        </div>
     <BackButton />
      </div>
    </>
  );
};
export default Proyects;
