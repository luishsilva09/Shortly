import {Router} from 'express';
import { signIn, signUp } from '../controllers/authController.js';
import {newUserValid} from '../middleware/newUserValid.js'

const authRoutes = Router();

authRoutes.post('/signup',newUserValid,signUp);
authRoutes.post('/signin',signIn)

export default authRoutes;