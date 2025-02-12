import type { ReactNode } from "react";
import "./NewProjectForm.css";

type ProjectType = {
  title: string;
  year: string;
  technologies: string;
  description: string;
};

interface NextProjectType {
  children?: ReactNode; // contenu optionnel pour le bouton dynamique
  defaultValue: ProjectType; // valeurs par défaut du formulaire
  onSubmit: (project: FormData) => void; // fonction appelée lors de la soumission d'un projet
}

function NextProjectForm({
  children,
  defaultValue,
  onSubmit,
}: NextProjectType) {
  // obtention de la date actuelle au format aaaa-mm-dd
  const today = new Date().toISOString().split("T")[0];
  const formattedDate = new Date().toLocaleDateString("fr-FR"); // Format de la date au format DD-MM-YYYY

  return (
    <section className="post-project-container">
      <h1 id="subm_project">AJOUTER UN PROJET</h1>
      <form
        className="form-project"
        onSubmit={(event) => {
          event.preventDefault(); // empêche le rechargement de la page lors de la soumission
          const formData = new FormData(event.currentTarget);
          formData.append("date", today);
          formData.append("dateoftheday", formattedDate); // Ajouter la date formatée
          onSubmit(formData);
        }}
      >
        <label htmlFor="title">TITRE DU PROJET</label>
        <input
          className="form-project-fields"
          placeholder="TITRE DU PROJET"
          type="text"
          name="title"
          defaultValue={defaultValue.title}
        />

        <label htmlFor="year">ANNÉE DE CRÉATION</label>
        <input
          className="form-project-fields"
          placeholder="ANNÉE"
          type="text"
          name="year"
          defaultValue={defaultValue.year}
        />

        <label htmlFor="technologies">TECHNOLOGIES UTILISÉES</label>
        <input
          className="form-project-fields"
          placeholder="TECHNOLOGIES"
          type="text"
          name="technologies"
          defaultValue={defaultValue.technologies}
        />

        <label htmlFor="description">DESCRIPTION DU PROJET</label>
        <textarea
          className="form-project-fields"
          rows={5}
          cols={50}
          placeholder="DESCRIPTION"
          name="description"
          defaultValue={defaultValue.description}
        />

        <p className="auth-gcu">
          <span className="star">*</span> En soumettant ce projet, vous acceptez
          que celui-ci soit publié sur le site.
        </p>
        <button className="post-project-button" type="submit">
          {children}SOUMETTRE LE PROJET
        </button>
      </form>
    </section>
  );
}

export default NextProjectForm;
