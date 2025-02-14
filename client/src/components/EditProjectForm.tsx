import type { ReactNode } from "react";

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
      <h1>Modifier mon projet</h1>
      <form
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
          />
        </label>
        <label className="updateForm-fields">
          Année
          <input
            type="text"
            name="year"
            defaultValue={defaultValue.year}
            required
          />
        </label>
        <label className="updateForm-fields">
          Technologies
          <input
            type="text"
            name="technologies"
            defaultValue={defaultValue.technologies}
            required
          />
        </label>
        <label className="updateForm-fields">
          Description
          <input
            type="text"
            name="description"
            defaultValue={defaultValue.description}
            required
          />
        </label>

        <button type="submit" className="update-project-button">
          {children}
        </button>
      </form>
    </section>
  );
}
export default EditProjectForm;
