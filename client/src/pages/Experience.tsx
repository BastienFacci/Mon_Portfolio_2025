import "./Experience.css";
import Construction from "../assets/images/under_contruction.jpg";

function Experience() {
  return (
    <section className="experience_container">
      <img src={Construction} alt="construction" className="construction" />

      <h1 id="under_construction">⚠️ Page en construction ⚠️</h1>
    </section>
  );
}

export default Experience;
