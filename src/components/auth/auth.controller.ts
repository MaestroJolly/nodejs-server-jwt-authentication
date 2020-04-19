'use strict';

// import RouteHandler from '../../libraries/route.handler';
import { Request, Response } from "express";

import AuthService from '../auth/auth.service';

const authService = new AuthService;


class AuthController{

    async login(req: Request, res: Response){

        try {
            const user = await authService.login(req.body);
            if(!user){
                throw new Error('No user found');
            }
            return res.send(user);
        } catch (error) {
            return res.status(400).send({ message:error.message });
        }
    }
}

export default AuthController;