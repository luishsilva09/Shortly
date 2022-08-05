import { Router } from "express";
import {authorization} from '../middleware/authorization.js';
import { userUrls} from '../controllers/userUrls.js'
const usersRoutes = Router();

usersRoutes.get('/users/me',authorization,userUrls)

export default usersRoutes;