import type { RequestHandler } from "express";

// Import access to data
import projectRepository from "./projectRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    const projects = await projectRepository.readAll();
    res.json(projects);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    const projectId = Number(req.params.id);
    const project = await projectRepository.read(projectId);

    if (project == null) {
      res.sendStatus(404);
    } else {
      res.json(project);
    }
  } catch (err) {
    next(err);
  }
};

// Méthodes désactivées volontairement
/*
const add: RequestHandler = async (req, res, next) => {
  try {
    const newProject = {
      title: req.body.title,
      year: req.body.year,
      technologies: req.body.technologies,
      description: req.body.description,
      image_url: req.body.image_url ?? null,
    };

    const insertId = await projectRepository.create(newProject);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const project = {
      id: Number(req.params.id),
      title: req.body.title,
      year: req.body.year,
      technologies: req.body.technologies,
      description: req.body.description,
      image_url: req.body.image_url ?? null,
    };

    const affectedRows = await projectRepository.update(project);
    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const projectId = Number(req.params.id);
    await projectRepository.delete(projectId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
*/

export default { browse, read };
