import type { RequestHandler } from "express";
import projectImageRepository from "./projectImageRepository";

const getImagesByProjectId: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const images = await projectImageRepository.readByProjectId(Number(id));
    res.status(200).json(images);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des images" });
  }
};

export default { getImagesByProjectId };
