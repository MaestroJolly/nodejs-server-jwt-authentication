'use strict';

import express from 'express';
import  { AuthController } from '../auth/auth.controller';
import { AuthEncryptionMiddleware } from '../middlewares/auth.encryption.middleware';

const router = express.Router();

const authController = new AuthController;


router.post('/login', authController.login);


export default router;