import "./ProjectNew.css";
import { useNavigate } from "react-router-dom";
import NewProjectForm from "../../components/NewProjectForm";

function ProjectNew() {
  const navigate = useNavigate();

  const newProject = {
    title: "",
    year: "",
    technologies: "",
    description: "",
  };

  return (
    <>
      <NewProjectForm
        defaultValue={newProject}
        onSubmit={(projectData) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/projects`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(projectData),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Erreur lors de l'ajout du projet");
              }
              return response.json();
            })
            .then((data) => {
              navigate(`/project/${data.insertId}`);
            })
            .catch((error) => console.error("Erreur :", error));
        }}
      >
        Ajouter
      </NewProjectForm>
    </>
  );
}

export default ProjectNew;
