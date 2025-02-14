import "./ProjectEdit.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditProjectForm from "../../components/EditProjectForm";

interface EditProjectType {
  id: number;
  title: string;
  year: number;
  description: string;
  technologies: string;
  user_id: number;
  image?: string;
}

function ProjectEdit() {
  const navigate = useNavigate();
  const { id } = useParams(); // Récupération de l'ID utilisateur depuis l'URL
  const [project, setProject] = useState<EditProjectType | null>(null); // État pour stocker les données utilisateur

  // Récupération des informations de l'utilisateur au chargement du composant
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projects/${id}`)
      .then((response) => response.json())
      .then((data: EditProjectType) => {
        setProject(data);
      });
  }, [id]); // Dépendance sur l'ID pour recharger les données si l'ID change

  if (!project) {
    return <p>Chargement...</p>;
  }
  return (
    project && (
      <section className="edit_project_container">
        <EditProjectForm
          defaultValue={project} // Passage des données actuelles au formulaire
          onSubmit={(projectData) => {
            // Requête PUT pour mettre à jour l'utilisateur
            fetch(
              `${import.meta.env.VITE_API_URL}/api/projects/${project.id}`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(projectData), // Envoi des données mises à jour au serveur
              },
            ).then((response) => {
              if (response.status === 204) {
                navigate("/project");
              }
            });
          }}
        >
          Modifier
        </EditProjectForm>
      </section>
    )
  );
}

export default ProjectEdit;
