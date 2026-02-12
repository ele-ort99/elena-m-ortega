import './emailconfirmed.css';

export const EmailConfirmed = ({ onClose }) => {
  return (
    <section className="confirmModal">
      <div className="confirmFlex">
        <div className='confirmText'>
          <img src="/img/contact/ok.gif" alt="Envío confirmado" />
          <h2>Tu mensaje ha sido enviado correctamente</h2>
          <p>¡Gracias por contactar!</p>
          <button type="button" onClick={onClose} className="aboutBackBtn">
            VOLVER
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailConfirmed;
