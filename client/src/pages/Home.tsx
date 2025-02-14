import "./Home.css";
import { Link } from "react-router-dom";
import Portrait from "../assets/images/profile_picture.png";

function Home() {
  return (
    <section className="home_container">
      <div className="portrait_description">
        <img src={Portrait} alt="Portrait" id="portrait" />

        <div className="desciption_container">
          <h1 id="my_name">Bastien Faccinetto</h1>
          <h2 id="my_fonction">Développeur front-end Junior</h2>
          <div className="presentation">
            <p>
              Actuellement en reconversion professionnelle, je me spécialise
              dans le développement web{" "}
              <strong className="description_bold">front-end</strong> avec une
              forte appétence pour l’
              <strong className="description_bold">UX/UI design</strong>.
              Passionné par la création d’interfaces intuitives et esthétiques,
              j’accorde une attention particulière à l’ergonomie et à
              l’expérience utilisateur. Je suis à la recherche d’un{" "}
              <strong className="description_bold">stage</strong> ou d’un{" "}
              <strong className="description_bold">contrat d’alternance</strong>{" "}
              pour mettre en pratique mes compétences en développement front-end
              et contribuer à des projets innovants alliant performance et
              design.
            </p>
            <div className="moreinfos_div">
              <Link to="/experience">
                <button type="button" id="more_infos">
                  + d'infos
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
