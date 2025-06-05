import express from "express";
import {
    createPlant,
    deletePlantById,
    editPlantById,
    getAllPlants,
    getPlantById,
    getStats,
} from '../controllers/plant.controller';
import { getWateringsByPlantId } from "../controllers/watering.controller";

const router = express.Router();

// @ts-ignore
router.get("/stats", getStats);
// @ts-ignore
router.get("/", getAllPlants);
// @ts-ignore
router.get("/:id", getPlantById);
// @ts-ignore
router.post("/", createPlant);
// @ts-ignore
router.patch("/:id", editPlantById);
// @ts-ignore
router.delete("/:id", deletePlantById);
// @ts-ignore
router.get("/:id/waterings", getWateringsByPlantId);

export default router;
