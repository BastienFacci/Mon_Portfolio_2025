import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProjectDetails.css";
import Back from "../../assets/images/icons/icon_back.png";

type Project = {
  id: number;
  title: string;
  year: number;
  description: string;
  technologies: string;
  image_url: string | null;
};

type ProjectImage = {
  id: number;
  project_id: number;
  image_url: string;
};

function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [images, setImages] = useState<ProjectImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Fetching data for project and images
  useEffect(() => {
    if (!id) return;

    fetch(`${import.meta.env.VITE_API_URL}/api/projects/${id}`)
      .then((response) => response.json())
      .then((data: Project) => {
        setProject(data);
      });

    fetch(`${import.meta.env.VITE_API_URL}/api/projects/${id}/images`)
      .then((response) => response.json())
      .then((data: ProjectImage[]) => {
        setImages(data);
      });
  }, [id]);

  if (!project) {
    return <p>Loading...</p>;
  }

  // Filtrer les images pour ne pas dupliquer l'image principale
  const filteredImages = images.filter(
    (img) => img.image_url !== project.image_url,
  );

  // Rassembler l'image principale avec les autres images
  const allImages = project.image_url
    ? [project.image_url, ...filteredImages.map((img) => img.image_url)]
    : [];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length,
    );
  };

  return (
    <section className="project_details">
      <Link to="/project">
        <button
          type="button"
          id="back_button"
          title="Retour à la page précédente"
        >
          <img src={Back} alt="Retour en arrière" id="back_icon" />
        </button>
      </Link>

      <section className="details-card">
        <h1 className="details_title">{project.title}</h1>

        {/* Carrousel dynamique des images */}
        <div className="project_images_container">
          {allImages.length > 0 && (
            <div className="carousel">
              {/* Bouton précédent */}
              <button
                type="button"
                className="carousel_button"
                onClick={goToPrevious}
              >
                <img src={Back} alt="Image_précédente" id="previous_icon" />
              </button>

              {/* Affichage dynamique de l'image */}
              <img
                src={`${import.meta.env.VITE_API_URL}${allImages[currentIndex]}`}
                alt={`${project.title} illustration`}
                className="project_picture_details"
              />

              {/* Bouton suivant */}
              <button
                type="button"
                className="carousel_button"
                onClick={goToNext}
              >
                <img src={Back} alt="Image_suivante" id="next_icon" />
              </button>
            </div>
          )}
        </div>

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
      </section>
    </section>
  );
}

export default ProjectDetails;
