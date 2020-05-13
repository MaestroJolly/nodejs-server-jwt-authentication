'use strict';

import express from 'express';
import  { UsersController } from '../users/users.controller';

const router = express.Router();

const usersController = new UsersController;


router.post('/register', usersController.register);

router.get('/profile', usersController.profile);


export default router;