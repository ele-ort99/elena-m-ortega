import './contact.css';
import ContactForm from './ContactForm';
import { BackButton } from "../../components/backButton/BackButton";

const Contact = () => {
  return (
    <div className="contactPage">
      <h2 className="contactTitle">CONTACTO</h2>

      <ContactForm />

        <h3>Si lo prefieres:</h3>
      <div className="contactOptions">

        <a
          href="https://www.linkedin.com/in/elenamunozortega/"
          className="btn in"
          aria-label="Abrir LinkedIn personal"
        >
          <i className="bi bi-linkedin"></i>
          LinkedIn
        </a>

        <a
          href="tel:+34634415493"
          className="btn tel"
          aria-label="Llamar al +34 634 415 493"
        >
          <i className="bi bi-telephone"></i>
          Llamar
        </a>

        <a
          href="https://wa.me/34634415493?text=Hola%20%F0%9F%91%8B%20Quiero%20informaci%C3%B3n"
          target="_blank"
          rel="noopener noreferrer"
          className="btn wha"
          aria-label="Abrir WhatsApp"
        >
          <i className="bi bi-whatsapp"></i>
          WhatsApp
        </a>

        <a
          href="mailto:elenaptlaboral@gmail.com"
          className="btn email"
          aria-label="Enviar correo"
        >
          <i className="bi bi-envelope"></i>
          E-mail
        </a>
      </div>

     <BackButton />
    </div>
  );
};

export default Contact;
