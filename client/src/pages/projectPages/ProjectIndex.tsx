import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Project_Picture from "../../assets/images/generic_project_image.jpg";
import Add from "../../assets/images/icons/icon_add.png";
import "./ProjectIndex.css";

type Project = {
  id: number;
  title: string;
  year: number;
  description: string;
  technologies: string;
  user_id: number;
  image?: string;
};

function ProjectIndex() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projects`)
      .then((response) => response.json())
      .then((data: Project[]) => {
        setProjects(data);
      });
  }, []);

  // Fonction pour retirer le projet supprimé de la liste
  const handleDelete = (id: number, title: string) => {
    const isConfirmed = window.confirm(
      `Êtes-vous sûr de vouloir supprimer le projet "${title}" ?`,
    );

    if (isConfirmed) {
      fetch(`${import.meta.env.VITE_API_URL}/api/projects/${id}`, {
        method: "delete",
      }).then((response) => {
        if (response.status === 204) {
          // Retirer le projet de la liste après suppression
          setProjects((prevProjects) =>
            prevProjects.filter((project) => project.id !== id),
          );
        }
      });
    }
  };

  return (
    <section className="projects">
      <div className="project-title-button">
        <h1 id="projects_title">Projets</h1>
        <Link to="/add_project">
          <button type="button" id="add_button">
            <img src={Add} alt="Ajouter un projet" id="add_project" />
            <span className="add-button-text">Ajouter un nouveau projet</span>
          </button>
        </Link>
      </div>

      <section className="projects_card_container">
        <ul className="project_informations">
          {projects.map((project) => (
            <li key={project.id} className="project_card">
              <Link to={`/project/${project.id}`}>
                <h2 className="project_title">{project.title}</h2>
                <img
                  src={
                    project.image
                      ? `${import.meta.env.VITE_API_URL}${project.image}`
                      : Project_Picture
                  }
                  alt="Project_Picture"
                  className="project_picture"
                />
                <div className="card_informations">
                  <p className="card_item">
                    <strong className="item_bold">Année :</strong>{" "}
                    {project.year}
                  </p>
                  <p className="card_item">
                    <strong className="item_bold">Technologies :</strong>{" "}
                    {project.technologies}
                  </p>
                  <p className="card_item">
                    <strong className="item_bold">Description :</strong>{" "}
                    {project.description}
                  </p>
                </div>
              </Link>
              <div className="action_buttons">
                {/* Utilisation de ProjectDelete avec gestion de suppression */}
                <button
                  type="button"
                  className="action_button"
                  onClick={() => handleDelete(project.id, project.title)}
                >
                  Supprimer
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default ProjectIndex;
