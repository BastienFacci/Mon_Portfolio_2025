import "./Experience.css";
import { Link } from "react-router-dom";
import CV from "../assets/images/CV Junior - Bac+2.pdf";
import Triceratops from "../assets/images/generic_project_image.png";
import CVIcon from "../assets/images/icons/icon_CV.png";
import Back from "../assets/images/icons/icon_back.png";
import ProjectIcon from "../assets/images/icons/icon_project.png";
import Skills from "../assets/images/icons_animation/front_end.gif";
import Triceratops02 from "../assets/images/search_dino.png";
import Threeceratops from "../assets/images/threeceratops.png";

function Experience() {
  return (
    <section className="experience_container">
      <section id="qui-suis-je" className="XP_block">
        <h1>Qui suis-je ?</h1>
        <div className="triceratops_wrapper">
          <img
            src={Triceratops}
            alt="Illustration de triceratops"
            className="illustration_triceratops"
            id="illustration_triceratops01"
          />
        </div>

        <p>
          J’ai passé <strong className="description_bold">15 ans</strong> à
          servir des plats… et à observer les gens. Le rythme, l’échange,
          l’adaptation constante : la restauration m’a appris à être attentif,
          réactif, humain.
        </p>
        <p>
          Mais au fond de moi, il y avait toujours une envie plus{" "}
          <strong className="description_bold">créative</strong>. Un besoin de
          construire, d’imaginer, de concevoir.{" "}
          <strong className="description_bold">Technicien audiovisuel</strong> à
          l’origine, l’image m’a toujours fasciné. Et un jour, entre deux
          confinements, j’ai ouvert{" "}
          <strong className="description_bold">Visual Studio Code</strong>… et
          je ne l’ai plus refermé.
        </p>
        <p>
          Le <strong className="description_bold">développement web</strong> m’a
          offert un terrain de jeu parfait : logique et esthétique, structure et
          liberté. J’y ai retrouvé l’énergie du service, mais au service de l’
          <strong className="description_bold">expérience utilisateur</strong>.
        </p>
        <p>
          Aujourd’hui <strong className="description_bold">diplômé DWWM</strong>
          , je me tourne vers le front-end et l’
          <strong className="description_bold">UX/UI design</strong> avec un
          regard sensible, curieux, un peu pixel-perfect, toujours humain.
        </p>
        <p>
          Ce que j’aime ? Créer des interfaces qui parlent, qui racontent
          quelque chose… et qui fonctionnent, tout simplement.
        </p>
      </section>

      <section id="ma-recherche" className="XP_block">
        <h1>Ma recherche</h1>
        <img
          src={Triceratops02}
          alt="Dino en train de chercher"
          className="illustration_triceratops"
        />
        <p>
          Après avoir fait mes premiers pas dans le développement, je suis
          désormais à la recherche de mon premier{" "}
          <strong className="description_bold">stage</strong>, une occasion de
          mettre en pratique tout ce que j'ai appris et d'apporter une touche
          personnelle à un projet.
        </p>
        <p>
          À partir de{" "}
          <strong className="description_bold">septembre prochain</strong>, je
          serai également à la recherche d’une{" "}
          <strong className="description_bold">alternance</strong> pour
          compléter ma formation et passer mon{" "}
          <strong className="description_bold">CDA</strong> (Certificat de
          Développeur d'Applications).
        </p>
      </section>

      <section id="experiences" className="XP_block">
        <h1>Mes expériences</h1>
        <p>
          Certes, ces expériences n'ont rien à voir avec le développement web...
          mais elles m'ont permis de développer des compétences hyper utiles
          pour ma reconversion, notamment la gestion de projets, la
          communication et la gestion de crises (comme des bugs en production,
          mais en version réelle).
        </p>
        <img
          src={Threeceratops}
          alt="Trois triceratops en réunion"
          className="illustration_triceratops"
        />

        <article className="fonctions">
          <h2 className="jobs">Chef de rang</h2>
          <h3>Le Commerce (Lyon 07) | 2020 - 2024</h3>
          <p>
            Gérer une équipe et le service client à la chaîne, c’est un peu
            comme gérer un projet en méthode agile : on reste flexible, on
            s’adapte et on essaie de garder la bonne humeur malgré les imprévus.
          </p>
        </article>

        <article className="fonctions">
          <h2 className="jobs">Bar manager</h2>
          <h3>Dam’s Pub (Lyon 01) | 2015 - 2020</h3>
          <p>
            Entre le recrutement, la gestion des stocks et la formation des
            équipes, j’ai appris à maintenir une organisation sans faille. Comme
            un repo bien structuré : tout doit être à sa place, et surtout,
            jamais de conflits.
          </p>
        </article>

        <article className="fonctions">
          <h2 className="jobs">Technicien audiovisuel</h2>
          <h3>
            Intermittence du spectacle (Rhône-Alpes-Auvergne) | 2006 - 2014
          </h3>
          <p>
            Le direct, c’est le vrai test de résilience ! Un câble qui lâche en
            pleine diffusion ? Pas de panique, on trouve vite une solution. Une
            vraie gestion de crise façon "debugging" en temps réel.
          </p>
        </article>

        <div className="CV_button">
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="cv-link"
          >
            <img src={CVIcon} alt="Icône CV" className="XP_icon" />
            <p className="see_more">Voir mon CV</p>
          </a>
        </div>
        <div className="CV_button">
          <Link to="/project" className="XP_link">
            <img src={ProjectIcon} alt="Icône CV" className="XP_icon" />
            <p className="see_more">Voir mes projets</p>
          </Link>
        </div>
      </section>

      <section id="skills" className="XP_block">
        <h1>Mes compétences</h1>

        <div className="skills_wheel">
          <img
            src={Skills}
            alt="Icône compétences animée"
            className="illustration_skills"
          />
        </div>

        <section className="skills_container">
          <div className="skills_div">
            <ul>
              <h4>Front-end</h4>
              <li>HTML / CSS</li>
              <li>JavaScript / TypeScript</li>
              <li>React</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          <div className="skills_div">
            <ul>
              <h4>Back-end</h4>
              <li>Node.js / Express</li>
              <li>API REST</li>
              <li>MySQL</li>
              <li>Authentification</li>
            </ul>
          </div>

          <div className="skills_div">
            <ul>
              <h4>Outils annexes</h4>
              <li>Git / GitHub</li>
              <li>VS Code</li>
              <li>Figma / Excalidraw</li>
              <li>Méthodes agiles</li>
            </ul>
          </div>

          <div className="skills_div">
            <ul>
              <h4>Soft skills</h4>
              <li>Créativité</li>
              <li>Esprit d'équipe</li>
              <li>Organisation</li>
              <li>Curiosité</li>
            </ul>
          </div>
        </section>
      </section>
      <button
        type="button"
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src={Back}
          alt="Retour vers le haut"
          id="icon_up"
          title="Retour vers le haut"
        />
      </button>
    </section>
  );
}

export default Experience;
