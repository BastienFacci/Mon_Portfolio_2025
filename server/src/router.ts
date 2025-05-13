import express, { type Request, type Response } from "express";
import { sendContactEmail } from "./modules/item/contact/contactActions";
import projectActions from "./modules/item/project/projectActions";
import projectImageActions from "./modules/item/projectImage/projectImageActions";

const router = express.Router();

/* ************************************************************************* */
// Routes pour les projets
/* ************************************************************************* */
router.get("/projects", projectActions.browse);
router.get("/projects/:id", projectActions.read);
// router.put("/projects/:id", projectActions.edit);
// router.post("/projects", projectActions.add);
// router.delete("/projects/:id", projectActions.destroy);

/* ************************************************************************* */
// Route pour envoyer un message de contact
/* ************************************************************************* */
router.post(
  "/contact",
  async (req: Request, res: Response): Promise<Response> => {
    const { firstname, lastname, email, subject, message } = req.body;

    // Vérifier si tous les champs sont présents
    if (!firstname || !lastname || !email || !subject || !message) {
      return res
        .status(400)
        .json({ error: "Tous les champs doivent être remplis" });
    }

    try {
      // Appeler la fonction pour envoyer l'email
      await sendContactEmail({ firstname, lastname, email, subject, message });
      return res.status(200).json({ message: "Message envoyé avec succès" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "Erreur lors de l'envoi du message" });
    }
  },
);

router.get("/projects/:id/images", projectImageActions.getImagesByProjectId);

export default router;
