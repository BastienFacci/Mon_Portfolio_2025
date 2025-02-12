import "./NewProjectForm.css";

function NewProjectForm() {
  return (
    <section className="NewProjectForm_container">
      <form>
        <label htmlFor="Titre">Titre</label>
        <input
          className="newprojectform_field"
          placeholder="Titre"
          type="text"
          name="title"
        />
        <label htmlFor="Année">Année</label>
        <input
          className="newprojectform_field"
          placeholder="Année"
          type="number"
          min="2024"
          max={new Date().getFullYear()}
          onChange={(e) => console.log(e.target.value)}
          name="title"
        />
        <label htmlFor="Technologies">Technologies</label>
        <input
          className="newprojectform_field"
          placeholder="Technologies"
          type="text"
          name="technologies"
        />
        <label htmlFor="Titre">Description</label>
        <textarea
          id="description"
          placeholder="Description"
          rows={4}
          cols={50}
        />
        <button type="button">Envoyer</button>
      </form>
    </section>
  );
}

export default NewProjectForm;
