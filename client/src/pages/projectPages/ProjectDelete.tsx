import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
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

    // Affichage de la boîte de dialogue SweetAlert2
    Swal.fire({
      title: "Êtes-vous sûr ?",
      text: `Voulez-vous vraiment supprimer le projet "${title}" ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#113f59",
      confirmButtonText: "Oui, supprimer",
      cancelButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/api/projects/${id}`, {
          method: "DELETE",
        }).then((response) => {
          if (response.status === 204) {
            toast.success(`Le projet "${title}" a bien été supprimé.`, {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
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
                theme: "light",
              },
            );
          }
        });
      }
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
