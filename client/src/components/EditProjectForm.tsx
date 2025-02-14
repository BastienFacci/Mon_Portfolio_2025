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

interface ProjectFormProps {
  children: ReactNode;
  defaultValue: Project;
  onSubmit: (project: Project) => void;
}

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
          event.preventDefault();
          const formData = new FormData(event.currentTarget);

          const updatedProject = {
            title: formData.get("title") as string,
            year: Number(formData.get("year")),
            technologies: formData.get("technologies") as string,
            description: formData.get("description") as string,
            id: defaultValue.id,
            user_id: defaultValue.user_id,
          };

          onSubmit(updatedProject);
          window.alert(
            `Votre projet "${updatedProject.title}" a bien été modifié.`,
          );
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
            type="number"
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
