import { Request, Response, NextFunction } from "express";
import { databaseConnection } from "../config/database";

export const getAllPlants = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const conn = await databaseConnection;

    const [results, fields] = await conn.query(
        'SELECT * FROM `plants`'
    );

    res.json(results)
}

export const getPlantById = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const conn = await databaseConnection;
    const plantId = req.params['id'];

    const [results, fields] = await conn.query(
        'SELECT * FROM `plants` WHERE id = ?', [plantId]
    );

    res.json(results);
}

export const createPlant = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const conn = await databaseConnection;

    try {
        const { name, species, waterIntervalDays } = req.body;
    } catch (err) { res.status(400).send('Bad request'); }

    const { name, species, waterIntervalDays } = req.body;

    const [results, fields] = await conn.query(
        'INSERT INTO `plants` (`id`, `name`, `species`, `water_interval_days`) VALUES (NULL, ?, ?, ?);', [name, species, waterIntervalDays]
    );

    res.json(results);
}

export const editPlantById = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const conn = await databaseConnection;

    const plantId = req.params['id'];

    try {
        const { name, species, waterIntervalDays } = req.body;
    } catch (err) { res.status(400).send('Bad request'); }

    const { name, species, waterIntervalDays } = req.body;

    const [results, fields] = await conn.query(
        'UPDATE `plants` SET `name` = ?, `species` = ?, `water_interval_days` = ? WHERE `plants`.`id` = 1;', [name, species, waterIntervalDays]
    );

    res.json(results);
}

export const deletePlantById = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const conn = await databaseConnection;
    const plantId = req.params['id'];

    const [results, fields] = await conn.query(
        'DELETE FROM `plants` WHERE id = ?', [plantId]
    );

    res.json(results);
}

export const getStats = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const conn = await databaseConnection;

    const [results, fields] = await conn.query(
        'SELECT * FROM `statistics`;'
    );

    res.json(results);
}

/*
const addNewMovie = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const { name, madeIn, cost, producerId } = req.body;
        

        const missingFields = [];
        if (!name) missingFields.push("name");
        if (!madeIn) missingFields.push("madeIn");
        if (cost === undefined) missingFields.push("cost");
        if (!producerId) missingFields.push("producerId");
        
        if (missingFields.length > 0) {
            return res.status(400).json({ message: "Missing data!", missingFields });
        }
        
        const movie = await addMovie(name, madeIn, cost, producerId);
        return res.status(201).json(movie);
    } catch (error: any) {
        next(error);
    }
};
*/

export {};
