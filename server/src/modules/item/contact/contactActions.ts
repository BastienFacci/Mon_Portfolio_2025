// src/modules/contact/contactActions.ts
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // Utilise Gmail ou un autre service d'email
  auth: {
    user: process.env.EMAIL_USER, // maintenant via .env
    pass: process.env.EMAIL_PASS,
  },
});

interface ContactData {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (
  contactData: ContactData,
): Promise<void> => {
  const { firstname, lastname, email, subject, message } = contactData;

  const mailOptions = {
    from: email, // L'email de l'utilisateur
    to: process.env.EMAIL_USER, // Ton email où tu veux recevoir les messages
    subject: `Message de ${firstname} ${lastname} - ${subject}`,
    text: `
      Nom: ${firstname} ${lastname}
      Email: ${email}

      Message:
      ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error);
    throw new Error("Erreur lors de l'envoi du message");
  }
};
