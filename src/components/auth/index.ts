'use strict';

import express from 'express';
import AuthController from '../auth/auth.controller';
import AuthEncryptionMiddleware from '../middlewares/auth.encryption.middleware';

const router = express.Router();

const authController = new AuthController;
const authEncryptionMiddleware = new AuthEncryptionMiddleware;


router.post('/login', authEncryptionMiddleware.encrypt, authController.login);


export default router;