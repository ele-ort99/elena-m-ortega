import './HomePage.css';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <section className="home">
      <section className="hero">
        <h1 className="heroQuote">Elena Muñoz Ortega</h1>
        <h2 className="heroQuote">Desarrolladora Web Full Stack</h2>
      </section>

      <section className="infoHome">
        <Link to="/skills" className="infoLink">
          <article className="infoCardHome">
            <p className="infoTextOverlay">SKILLS</p>
            <div className="infoImgWrap">
              <img
                className="infoImg"
                src="/img/home/skills-home.jpg"
                alt="Skills"
              />
            </div>
          </article>
        </Link>

        <Link to="/about" className="infoLink">
          <article className="infoCardHome">
            <p className="infoTextOverlay">SOBRE MÍ</p>
            <div className="infoImgWrap">
              <img
                className="infoImg"
                src="/img/home/about-home3.jpg"
                alt="About"
              />
            </div>
          </article>
        </Link>

        <Link to="/proyects" className="infoLink">
          <article className="infoCardHome">
            <p className="infoTextOverlay">PROYECTOS</p>
            <div className="infoImgWrap">
              <img
                className="infoImg"
                src="/img/home/proyectos-home.jpg"
                alt="Proyectos"
              />
            </div>
          </article>
        </Link>
      </section>
    </section>
  );
};

export default HomePage;
