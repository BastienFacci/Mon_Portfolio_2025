import { useEffect, useState } from "react";
import { Link /*, useNavigate */ } from "react-router-dom";
// import { toast } from "react-toastify";
// import Project_Picture from "../../assets/images/generic_project_image.jpg";
import Dino from "../../assets/images/Triceratops.png";
import "react-toastify/dist/ReactToastify.css";
import "./ProjectIndex.css";

type Project = {
  id: number;
  title: string;
  year: number;
  description: string;
  technologies: string;
  image_url: string | null;
};

function ProjectIndex() {
  const [projects, setProjects] = useState<Project[]>([]);
  // const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projects`)
      .then((response) => response.json())
      .then((data: Project[]) => {
        setProjects(data);
      });
  }, []);

  /*
  // Fonction pour retirer le projet supprimé de la liste
  const handleDelete = (id: number, title: string) => {
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
            // Retirer le projet de la liste après suppression
            setProjects((prevProjects) =>
              prevProjects.filter((project) => project.id !== id),
            );
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
  */

  return (
    <section className="projects">
      <div className="project-title-button">
        <h1 id="projects_title">Projets</h1>
        {/*
        <Link to="/add_project">
          <button type="button" id="add_button">
            <img src={Add} alt="Ajouter un projet" id="add_project" />
            <span className="add-button-text">Ajouter un nouveau projet</span>
          </button>
        </Link>
        */}
      </div>

      <section className="projects_card_container">
        <ul className="project_informations">
          {projects.map((project) => (
            <li key={project.id} className="project_card">
              <Link to={`/project/${project.id}`}>
                <h2 className="project_title">{project.title}</h2>
                {project.image_url && (
                  <img
                    src={`${import.meta.env.VITE_API_URL}${project.image_url}`}
                    alt={project.title}
                    className="project_picture"
                  />
                )}
                <div className="card_informations">
                  <p className="card_item">
                    <strong className="item_bold">Année :</strong>{" "}
                    {project.year}
                  </p>
                  <p className="card_item">
                    <strong className="item_bold">Technologies :</strong>{" "}
                    {project.technologies}
                  </p>
                </div>
                <div className="dino_div">
                  <img
                    src={Dino}
                    alt="Illustration dinosaure"
                    className="dino"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default ProjectIndex;
