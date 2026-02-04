import { Router } from 'express';
import {
  userRegisterSchema,
  userLoginSchema,
} from '../validations/authValidation.js';
import { celebrate } from 'celebrate';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUserSession,
} from '../controllers/authController.js';

const router = Router();

router.post('/auth/register', celebrate(userRegisterSchema), registerUser);

router.post('/auth/login', celebrate(userLoginSchema), loginUser);

router.post('/auth/refresh', refreshUserSession);

router.post('/auth/logout', logoutUser);

export default router;
