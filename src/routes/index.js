import express from 'express';
import authRoutes from './authRoutes.js';
import rankingRoutes from './rankingRoutes.js';
import urlsRoutes from './urlsRoutes.js';
import usersRoutes from './usersRoute.js';

const router = express.Router()

router.use(authRoutes)
router.use(urlsRoutes)
router.use(usersRoutes)
router.use(rankingRoutes)
export default router;