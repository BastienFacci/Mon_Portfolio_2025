import databaseClient from "../../../../database/client";
import type { Rows } from "../../../../database/client";

class ProjectImageRepository {
  async readByProjectId(projectId: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM project_image WHERE project_id = ?",
      [projectId],
    );
    return rows;
  }
}

export default new ProjectImageRepository();
