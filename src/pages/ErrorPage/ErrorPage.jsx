import "./errorpage.css";
import { useNavigate } from "react-router";


const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error-container">
      <div className="error-content">
        <img src="/img/home/error.gif" alt="Error" />
        <h1>404</h1>
        <h2>Ups… algo se rompió</h2>
        <p>
          Parece que esta página decidió tomarse unas vacaciones 😅  
          <br />Mientras tanto, puedes volver al inicio o explorar otros proyectos.
        </p>
        <div className="aboutActions">

        <button
          type="button"
          onClick={() => navigate('/')}
          className="aboutBackBtn"
          >
          VOLVER
        </button>
      </div>
      </div>
    </div>
  );
};

export default ErrorPage;