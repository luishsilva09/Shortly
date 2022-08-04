import express from 'express';
import authRoutes from './authRoutes.js';
import urlsRoutes from './urlsRoutes.js';
import usersRoutes from './usersRoute.js';

const router = express.Router()

router.use(authRoutes)
router.use(urlsRoutes)
router.use(usersRoutes)
export default router;