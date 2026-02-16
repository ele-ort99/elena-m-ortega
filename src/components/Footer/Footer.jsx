import "./footer.css";
import logoFooter from "../../assets/images/logo-footer.gif"
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router";
 
export const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className="footer">
      <div className="footer__content">
       
        <div className="footer__logo">
          <img src={logoFooter} alt="Elena Ortega" />
        </div>
 
        <div className="footer__info">
          <h4>Información de contacto</h4>
          <p>
            <FaMapMarkerAlt />
            <span>Málaga, España</span>
          </p>
          <p>
            <FaPhoneAlt />
            <span>+34 634 415 493</span>
          </p>
          <p>
            <FaClock />
            <span>
              Disponibilidad inmediata
            </span>
          </p>
        </div>
 
        <div className="footer__actions">
         
          <button className="footer__button" onClick={() => navigate("/contact")}>
            Formulario contacto
          </button>
 
          <div className="footer__social">
            {/* redes sociales */}
            {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/elenamunozortega/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

            {/* whatsapp */}
            {/* añadir whatsapp de las clientas */}
                <a
                  href="https://wa.me/634415493"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp />
                </a>
             
               <a
                  href="mailto:elenaptlaboral@gmail.com"
                  aria-label="Email"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "mailto:elenaptlaboral@gmail.com?subject=" + encodeURIComponent("Contacto Portfolio") + "&body=" + encodeURIComponent("¡Hola! He visto tu portfolio y quiero contactar contigo.");
                  }}
                >
                  <FaEnvelope />
                </a>
          </div>
        </div>
      </div>
 
      <div className="footer__bottom">
        © 2026 Elena M. Ortega. Reservados todos los derechos.
      </div>
    </footer>
  );
};