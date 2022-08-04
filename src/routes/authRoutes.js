import {Router} from 'express';
import { signIn, signUp } from '../controllers/authController.js';
import {newUserValid} from '../middleware/newUserValid.js'
import { signinValid } from '../middleware/signinValid.js';

const authRoutes = Router();

authRoutes.post('/signup',newUserValid,signUp);
authRoutes.post('/signin',signinValid,signIn)

export default authRoutes;