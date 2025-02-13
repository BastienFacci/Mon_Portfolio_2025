import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectDelete.css";

type ProjectDeleteProps = {
  id: number;
  title: string;
  children: ReactNode;
};

function ProjectDelete({ id, title, children }: ProjectDeleteProps) {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Affiche une fenêtre de confirmation avant la suppression
    const isConfirmed = window.confirm(
      `Êtes-vous sûr de vouloir supprimer le projet "${title}" ?`,
    );

    if (isConfirmed) {
      fetch(`${import.meta.env.VITE_API_URL}/api/projects/${id}`, {
        method: "delete",
      }).then((response) => {
        if (response.status === 204) {
          navigate("/project");
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">{children}</button>
    </form>
  );
}

export default ProjectDelete;
