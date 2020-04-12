'use strict';

import express from 'express';
import AuthController from '../auth/auth.controller';

const router = express.Router();

const authController = new AuthController;

router.get('/test', (req, res) =>{
    console.log(req);
    res.send({
        test: "hi"
    });
})


router.get('/login', authController.login);


export default router;