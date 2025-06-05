import { Request, Response, NextFunction } from "express";
import { databaseConnection } from "../config/database";

export const getWateringsByPlantId = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const conn = await databaseConnection;
    const plantId = req.params['id'];

    const [results, fields] = await conn.query(
        'SELECT * FROM `watering_logs` WHERE plant_id = ?', [plantId]
    );

    res.json(results);
}

export const createWatering = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const conn = await databaseConnection;
    const plantId = req.params['id'];

    try {
        const { dateWatered, amountMl, notes } = req.body;
    } catch (err) { res.status(400).send('Bad request'); }

    const { dateWatered, amountMl, notes } = req.body;

    const [results, fields] = await conn.query(
        'INSERT INTO `watering_logs` (`id`, `plant_id`, `date_watered`, `amount_ml`, `notes`) VALUES (NULL, ?, ?, ?, ?);', [plantId, dateWatered, amountMl, notes]
    );

    res.json(results);
}
export const deleteWatering = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const conn = await databaseConnection;
    const wateringId = req.params['id'];

    const [results, fields] = await conn.query(
        'DELETE FROM `watering_logs` WHERE id = ?', [wateringId]
    );

    res.json(results);
}
