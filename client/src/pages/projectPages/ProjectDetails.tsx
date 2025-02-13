import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectDelete from "./ProjectDelete"; // Import du composant
import "./ProjectDetails.css";
import Project_Picture from "../../assets/images/generic_project_image.jpg";

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
  const { id } = useParams<{ id: string }>(); // Récupère l'ID depuis l'URL
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
      <h1>{project.title}</h1>
      <img
        src={
          project.image
            ? `${import.meta.env.VITE_API_URL}${project.image}`
            : Project_Picture
        }
        alt="Project_Picture"
      />
      <p>
        <strong>Année :</strong> {project.year}
      </p>
      <p>
        <strong>Technologies :</strong> {project.technologies}
      </p>
      <p>
        <strong>Description :</strong> {project.description}
      </p>

      {/* Utilisation de ProjectDelete */}
      <ProjectDelete id={project.id} title={project.title}>
        Supprimer
      </ProjectDelete>
    </section>
  );
}

export default ProjectDetails;
