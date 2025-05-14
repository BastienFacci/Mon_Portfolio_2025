import type { ReactNode } from "react";
import DiscordIcon from "../assets/images/icons/icon_social_discord.png";
import GithubIcon from "../assets/images/icons/icon_social_github.png";
import LinkedinIcon from "../assets/images/icons/icon_social_linkedin.png";

import "./ContactForm.css";

// Type des données du formulaire de contact
type ContactType = {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
};

// Props attendues par le composant
interface NextContactType {
  children?: ReactNode;
  defaultValue: ContactType;
  onSubmit: (contact: Record<string, string>) => void;
}

function ContactForm({ children, defaultValue, onSubmit }: NextContactType) {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const contactData: Record<string, string> = {};
    formData.forEach((value, key) => {
      contactData[key] = value.toString();
    });

    onSubmit(contactData);
    event.currentTarget.reset(); // Réinitialiser le formulaire
  };

  return (
    <section className="contact-form-container">
      {/* <Link to="/">
        <button type="button" id="back_button">
          <img src={Back} alt="Retour en arrière" id="back_icon" />
        </button>
      </Link> */}

      <h1 id="contact_title">CONTACTEZ-MOI</h1>

      <form className="form-contact" onSubmit={handleFormSubmit}>
        <label htmlFor="firstname">Prénom</label>
        <input
          className="form-contact-fields"
          placeholder="Votre prénom"
          type="text"
          id="firstname"
          name="firstname"
          defaultValue={defaultValue.firstname}
          required
        />

        <label htmlFor="lastname">Nom</label>
        <input
          className="form-contact-fields"
          placeholder="Votre nom"
          type="text"
          id="lastname"
          name="lastname"
          defaultValue={defaultValue.lastname}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          className="form-contact-fields"
          placeholder="Votre email"
          type="email"
          id="email"
          name="email"
          defaultValue={defaultValue.email}
          required
        />

        <label htmlFor="subject">Sujet</label>
        <input
          className="form-contact-fields"
          placeholder="Le sujet de votre message"
          type="text"
          id="subject"
          name="subject"
          defaultValue={defaultValue.subject}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          className="form-contact-fields"
          placeholder="Votre message"
          id="message"
          name="message"
          rows={8}
          cols={50}
          defaultValue={defaultValue.message}
          required
        />

        <div className="send_message_div">
          <button className="send-message-button" type="submit">
            {children}
          </button>
        </div>
      </form>

      <div className="socials">
        <a
          href="https://github.com/BastienFacci"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={GithubIcon}
            alt="Lien vers mon Github"
            className="social_icons"
            title="Lien vers mon Github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/bastien-faccinetto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={LinkedinIcon}
            alt="Lien vers mon Linkedin"
            className="social_icons"
            title="Lien vers mon Linkedin"
          />
        </a>
        <a
          href="https://discord.com/users/1042503192342188072"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={DiscordIcon}
            alt="Lien vers mon Discord"
            className="social_icons"
            title="Lien vers mon Discord"
          />
        </a>
      </div>
    </section>
  );
}

export default ContactForm;
