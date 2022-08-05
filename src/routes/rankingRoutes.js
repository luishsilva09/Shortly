import {Router} from 'express';
import { ranking } from '../controllers/rankingController.js';
const rankingRoutes = Router();

rankingRoutes.get('/ranking',ranking)

export default rankingRoutes;