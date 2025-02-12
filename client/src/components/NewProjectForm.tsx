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
  onSubmit: (project: Record<string, string>) => void; // fonction appelée lors de la soumission d'un projet
}

function NextProjectForm({
  children,
  defaultValue,
  onSubmit,
}: NextProjectType) {
  // Obtention de la date actuelle au format aaaa-mm-dd
  const today = new Date().toISOString().split("T")[0];
  const formattedDate = new Date().toLocaleDateString("fr-FR"); // Format DD-MM-YYYY

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

          // Convertir FormData en objet JSON
          const projectData: Record<string, string> = {};
          formData.forEach((value, key) => {
            projectData[key] = value.toString();
          });

          onSubmit(projectData);
        }}
      >
        <label htmlFor="title">Titre</label>
        <input
          className="form-project-fields"
          placeholder="TITRE DU PROJET"
          type="text"
          name="title"
          defaultValue={defaultValue.title}
          required
        />

        <label htmlFor="year">Année</label>
        <input
          className="form-project-fields"
          placeholder="ANNÉE"
          type="text"
          name="year"
          defaultValue={defaultValue.year}
          required
        />

        <label htmlFor="technologies">Technologies</label>
        <input
          className="form-project-fields"
          placeholder="TECHNOLOGIES"
          type="text"
          name="technologies"
          defaultValue={defaultValue.technologies}
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          className="form-project-fields"
          rows={5}
          cols={50}
          placeholder="DESCRIPTION"
          name="description"
          defaultValue={defaultValue.description}
          required
        />

        <button className="post-project-button" type="submit">
          {children}Envoyer
        </button>
      </form>
    </section>
  );
}

export default NextProjectForm;
