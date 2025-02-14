import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import projectActions from "./modules/item/project/projectActions";

router.get("/api/projects", projectActions.browse);
router.get("/api/projects/:id", projectActions.read);
router.put("/api/projects/:id", projectActions.edit);
router.post("/api/projects", projectActions.add);
router.delete("/api/projects/:id", projectActions.destroy);
/* ************************************************************************* */

export default router;
