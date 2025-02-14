import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProjectDelete from "./ProjectDelete";
import "./ProjectDetails.css";
import Project_Picture from "../../assets/images/generic_project_image.jpg";
import Back from "../../assets/images/icons/icon_back.png";

type Project = {
  id: number;
  title: string;
  year: number;
  description: string;
  technologies: string;
  user_id: number;
  image?: string;
};

function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projects/${id}`)
      .then((response) => response.json())
      .then((data: Project) => {
        setProject(data);
      });
  }, [id]);

  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <section className="project_details">
      <Link to="/project">
        <button type="button" id="back_button">
          <img src={Back} alt="Retour en arrière" id="back_icon" />
        </button>
      </Link>
      <section className="details-card">
        <h1 className="details_title">{project.title}</h1>
        <img
          src={
            project.image
              ? `${import.meta.env.VITE_API_URL}${project.image}`
              : Project_Picture
          }
          alt="Project_Picture"
          className="generic-img"
        />
        <div className="details_items">
          <p className="item_details_p">
            <strong className="item_details_bold">Année :</strong>{" "}
            {project.year}
          </p>
          <p className="item_details_p">
            <strong className="item_details_bold">Technologies :</strong>{" "}
            {project.technologies}
          </p>
          <p className="item_details_p">
            <strong className="item_details_bold">Description :</strong>{" "}
            {project.description}
          </p>
        </div>
        <div className="buttons_duo">
          <ProjectDelete id={project.id} title={project.title}>
            Supprimer
          </ProjectDelete>

          <Link to={`/edit_project/${project.id}`}>
            <button type="button" className="edit-project-button">
              Modifier
            </button>
          </Link>
        </div>
      </section>
    </section>
  );
}

export default ProjectDetails;
