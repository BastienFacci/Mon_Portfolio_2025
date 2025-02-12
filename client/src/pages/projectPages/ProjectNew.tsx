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
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(projectData),
          })
            .then((response) => response.json())
            .then((data) => {
              navigate(`/projects/${data.insertId}`);
            });
        }}
      >
        Ajouter
      </NewProjectForm>
    </>
  );
}

export default ProjectNew;
