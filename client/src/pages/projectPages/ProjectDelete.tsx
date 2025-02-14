import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

    // Affichage de la fenêtre de confirmation avec Toastify
    toast.info(`Êtes-vous sûr de vouloir supprimer le projet "${title}" ?`, {
      position: "top-center",
      autoClose: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      onClick: () => {
        // Si l'utilisateur confirme, procéder à la suppression du projet
        fetch(`${import.meta.env.VITE_API_URL}/api/projects/${id}`, {
          method: "delete",
        }).then((response) => {
          if (response.status === 204) {
            toast.success(`Le projet "${title}" a bien été supprimé.`, {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            navigate("/project");
          } else {
            toast.error(
              `Une erreur est survenue lors de la suppression de "${title}".`,
              {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              },
            );
          }
        });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" className="delete_button">
        {children}
      </button>
    </form>
  );
}

export default ProjectDelete;
