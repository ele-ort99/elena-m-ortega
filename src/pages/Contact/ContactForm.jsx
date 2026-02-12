import { useState } from 'react';
import { ZodError } from 'zod';
import { contactSchema } from '../../schemas/ContactShema';
import EmailConfirmed from '../../components/emailConfirmed/EmailConfirmed';
import emailjs from '@emailjs/browser';

const initialValue = {
  nombre: '',
  telefono: '',
  email: '',
  mensaje: '',
};

const ContactForm = () => {
  const [form, setForm] = useState(initialValue);
  const [valErrors, setValErrors] = useState({});
  const [status, setStatus] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    setStatus('');
    setValErrors({});

    try {
      contactSchema.parse(form);

      // Enviar correo con EmailJS
      await emailjs.send(
        'service_n64jvyj',
        'template_yehvkbl',
        {
          nombre: form.nombre,
          email: form.email,
          telefono: form.telefono,
          mensaje: form.mensaje,
        },
        'FmeZDUX0JxlSAC_jA',
      );

      setStatus('Mensaje enviado');
      setForm(initialValue);
      setOpenModal(true);
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldsErrors = {};
        error.issues.forEach((elem) => {
          fieldsErrors[elem.path[0]] = elem.message;
        });
        setValErrors(fieldsErrors);
        setStatus('Error al enviar mensaje');
        return;
      }

      console.log(error);
      setStatus('Error al enviar mensaje');
    }
  };

  return (
    <form className="contactForm" onSubmit={onSubmit}>
      <input
        name="nombre"
        type="text"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
      />
      {valErrors.nombre && <p className="error-text">{valErrors.nombre}</p>}

      <input
        name="telefono"
        type="tel"
        placeholder="Teléfono"
        value={form.telefono}
        onChange={handleChange}
      />
      {valErrors.telefono && <p className="error-text">{valErrors.telefono}</p>}

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      {valErrors.email && <p className="error-text">{valErrors.email}</p>}

      <textarea
        name="mensaje"
        placeholder="Mensaje"
        value={form.mensaje}
        onChange={handleChange}
      />
      {valErrors.mensaje && <p className="error-text">{valErrors.mensaje}</p>}

      <button type="submit">
        ENVIAR
      </button>

      {openModal && (
        <EmailConfirmed onClose={() => setOpenModal(false)}></EmailConfirmed>
      )}

      {status && <p className="error-text">{status}</p>}
    </form>
  );
};

export default ContactForm;
