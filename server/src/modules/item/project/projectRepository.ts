import databaseClient from "../../../../database/client";
import type { Result, Rows } from "../../../../database/client";

type Project = {
  id: number;
  title: string;
  year: number;
  description: string;
  technologies: string;
  image_url: string | null; // mise à jour de l'ancien user_id
};

class ProjectRepository {
  // Partie mise en commentaire car l'ajout de projets n'est plus nécessaire :
  /*
  async create(project: Omit<Project, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into project (title, year, description, technologies, image_url) values (?, ?, ?, ?, ?)",
      [
        project.title,
        project.year,
        project.description,
        project.technologies,
        project.image_url,
      ],
    );
    return result.insertId;
  }
  */

  // Lecture d'un seul projet
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM project WHERE id = ?",
      [id],
    );
    return rows[0] as Project | null;
  }

  // Lecture de tous les projets
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM project ORDER BY id DESC",
    );
    return rows as Project[];
  }

  // Partie mise en commentaire car tu ne veux plus modifier :
  /*
  async update(project: Project) {
    const [result] = await databaseClient.query<Result>(
      "update project set title = ?, year = ?, technologies = ?, description = ? where id = ?",
      [
        project.title,
        project.year,
        project.technologies,
        project.description,
        project.id,
      ],
    );
    return result.affectedRows;
  }
  */

  // Partie mise en commentaire car tu ne veux plus supprimer :
  /*
  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from project where id = ?",
      [id],
    );
    return result.affectedRows;
  }
  */
}

export default new ProjectRepository();
