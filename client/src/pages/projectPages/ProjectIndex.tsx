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

  return (
    <section className="projects">
      <h1 id="projects_title">Projets</h1>
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
                <button type="button" className="action_button">
                  Modifier
                </button>
                <button type="button" className="action_button">
                  Supprimer
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Link to="/add_project">
        <button type="button" id="add_button">
          <img src={Add} alt="add_project" id="add_project" />
        </button>
      </Link>
    </section>
  );
}

export default ProjectIndex;
