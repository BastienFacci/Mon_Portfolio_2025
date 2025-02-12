import databaseClient from "../../../../database/client";

import type { Result, Rows } from "../../../../database/client";

type Project = {
  id: number;
  title: string;
  year: number;
  description: string;
  technologies: string;
  user_id: number;
};

class ProjectRepository {
  // The C of CRUD - Create operation

  async create(project: Omit<Project, "id">) {
    // Execute the SQL INSERT query to add a new project to the "project" table
    const [result] = await databaseClient.query<Result>(
      "insert into project (title, year, description, technologies, user_id) values (?, ?, ?, ?, ?)",
      [
        project.title,
        project.year,
        project.description,
        project.technologies,
        project.user_id,
      ],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Exécute la requête SQL pour récupérer un projet spécifique par son ID
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM project WHERE id = ?",
      [id],
    );

    // Retourne le premier projet trouvé, ou null si aucun projet n'est trouvé
    return rows[0] as Project | null;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all projects from the "project" table
    const [rows] = await databaseClient.query<Rows>("select * from project");

    // Return the array of projects
    return rows as Project[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item: Item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new ProjectRepository();
