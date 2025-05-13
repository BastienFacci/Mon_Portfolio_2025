import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "../components/ContactForm";

function Contact() {
  const newContact = {
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  };

  return (
    <section className="contact-container">
      <ToastContainer />
      <ContactForm
        defaultValue={newContact}
        onSubmit={(contactData) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(contactData),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Erreur lors de l'envoi du message");
              }
              return response.json();
            })
            .then((data) => {
              // biome-ignore lint/suspicious/noConsoleLog: <explanation>
              console.log("Message envoyé avec succès :", data);
              toast.success("Votre message a bien été envoyé.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                style: {
                  backgroundColor: "green", // Fond blanc
                  color: "white", // Texte noir (tu peux changer la couleur ici si tu veux)
                  border: "1px solid green", // Ajouter une bordure légère (optionnel)
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Ombre légère (optionnel)
                },
              });
            })
            .catch((error) => {
              console.error("Erreur :", error);
              toast.error("Erreur lors de l'envoi du message.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
              });
            });
        }}
      >
        Envoyer
      </ContactForm>
    </section>
  );
}

export default Contact;
