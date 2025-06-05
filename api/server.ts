import express from 'express';
import cors from 'cors';
import path from 'path'
import { databaseConnection } from './config/database';
import { appConfig } from './config/config';
import wateringRoutes from './routes/watering.routes';
import plantRoutes from './routes/plant.routes';

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// Register routes
app.use('/api/plants', plantRoutes);
app.use('/api/waterings', wateringRoutes);

databaseConnection.then(x => console.log('Connected.'))

app.listen(appConfig.port, ()=>{
    console.log(`Server running at http://localhost:${appConfig.port}`)
})
