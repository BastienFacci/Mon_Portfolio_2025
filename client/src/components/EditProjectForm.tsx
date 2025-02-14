import type { ReactNode } from "react";
import "./EditProjectForm.css";

type Project = {
  id: number;
  title: string;
  year: number;
  description: string;
  technologies: string;
  user_id: number;
  image?: string;
};

// Interface définissant les props du formulaire de modification d'utilisateur
interface ProjectFormProps {
  children: ReactNode;
  defaultValue: Project; // valeurs initiales des champs du formulaire (prerémpli)
  onSubmit: (project: Project) => void;
}

// fonction du composant permettant la modification du profil
function EditProjectForm({
  children,
  defaultValue,
  onSubmit,
}: ProjectFormProps) {
  return (
    <section className="update-project-container">
      <h1 id="edit_project_title">Modifier mon projet</h1>
      <form
        className="edit_form"
        onSubmit={(event) => {
          event.preventDefault(); // empechement de rechargement de la page
          const formData = new FormData(event.currentTarget); // récuperation des donnés du formulaire
          onSubmit({
            // envoie les donn"es au composant parent
            title: formData.get("title") as string,
            year: formData.get("year") as unknown as number,
            technologies: formData.get("technologies") as string,
            description: formData.get("description") as string,
            id: 0,
            user_id: 0,
          });
        }}
      >
        <label className="updateForm-fields">
          Titre
          <input
            type="text"
            name="title"
            defaultValue={defaultValue.title}
            required
            className="edit-fields"
          />
        </label>
        <label className="updateForm-fields">
          Année
          <input
            type="text"
            name="year"
            defaultValue={defaultValue.year}
            required
            className="edit-fields"
          />
        </label>
        <label className="updateForm-fields">
          Technologies
          <input
            type="text"
            name="technologies"
            defaultValue={defaultValue.technologies}
            required
            className="edit-fields"
          />
        </label>
        <label className="updateForm-fields">
          Description
          <textarea
            name="description"
            defaultValue={defaultValue.description}
            required
            className="edit-fields"
            rows={5}
            cols={50}
          />
        </label>

        <div className="edit-button-div">
          <button type="submit" className="update-project-button">
            {children}
          </button>
        </div>
      </form>
    </section>
  );
}
export default EditProjectForm;
