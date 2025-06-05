import express from "express";
import {
    createWatering,
    deleteWatering,
} from '../controllers/watering.controller';

const router = express.Router();

// @ts-ignore
router.post("/waterings", createWatering);
// @ts-ignore
router.delete("/waterings/:id", deleteWatering);

export default router;
