import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Project_Picture from "../../assets/images/generic_project_image.jpg";
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
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <Link to={`/project/${project.id}`} className="project_card">
                <img
                  src={
                    project.image
                      ? `${import.meta.env.VITE_API_URL}${project.image}`
                      : Project_Picture
                  }
                  alt="Project_Picture"
                  id="project_picture"
                />
                <div>
                  <strong>{project.title}</strong>
                  <p>{project.year}</p>
                  <p>{project.technologies}</p>
                  <p>{project.description}</p>
                </div>
              </Link>
              <button type="button">Modifier</button>
              <button type="button">Supprimer</button>
            </li>
          ))}
        </ul>
      </section>

      <Link to="/add_project">
        <button type="button">+</button>
      </Link>
    </section>
  );
}

export default ProjectIndex;
