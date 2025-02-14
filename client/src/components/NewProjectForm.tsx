import type { ReactNode } from "react";
import { toast } from "react-toastify";
import Back from "../assets/images/icons/icon_back.png";
import Triceratops from "../assets/images/triceratops.png";
import "./NewProjectForm.css";
import { Link, useNavigate } from "react-router-dom";

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
  const today = new Date().toISOString().split("T")[0];
  const formattedDate = new Date().toLocaleDateString("fr-FR");
  const navigate = useNavigate(); // Hook de navigation

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission
    const formData = new FormData(event.currentTarget);
    formData.append("date", today);
    formData.append("dateoftheday", formattedDate);

    const projectData: Record<string, string> = {};
    formData.forEach((value, key) => {
      projectData[key] = value.toString();
    });

    onSubmit(projectData);

    toast.success(
      `Le projet "${projectData.title}" a été rajouté avec succès !`,
      {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      },
    );

    // Rediriger après un court délai pour que la notification soit visible
    setTimeout(() => {
      navigate("/project");
    }, 2000);
  };

  return (
    <section className="post-project-container">
      <Link to="/project">
        <button type="button" id="back_button">
          <img src={Back} alt="Retour en arrière" id="back_icon" />
        </button>
      </Link>
      <h1 id="subm_project">AJOUTER UN PROJET</h1>

      <form className="form-project" onSubmit={handleFormSubmit}>
        <label htmlFor="title">Titre</label>
        <input
          className="form-project-fields"
          placeholder="Titre"
          type="text"
          name="title"
          defaultValue={defaultValue.title}
          required
        />

        <label htmlFor="year">Année</label>
        <input
          className="form-project-fields"
          placeholder="Année"
          type="text"
          name="year"
          defaultValue={defaultValue.year}
          required
        />

        <label htmlFor="technologies">Technologies</label>
        <input
          className="form-project-fields"
          placeholder="Technologies"
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
          placeholder="Description"
          name="description"
          defaultValue={defaultValue.description}
          required
        />

        <div className="post_project_div">
          <button className="post-project-button" type="submit">
            {children}
          </button>
        </div>
      </form>
      <div className="triceratops-div">
        <img src={Triceratops} alt="Triceratops" id="triceratops" />
      </div>
    </section>
  );
}

export default NextProjectForm;
