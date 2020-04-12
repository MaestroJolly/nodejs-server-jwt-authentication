'use strict';

// import RouteHandler from '../../libraries/route.handler';
import { Request, Response } from "express";

import AuthService from '../auth/auth.service';

const authService = new AuthService;


class AuthController{

    login(req: Request, res: Response){
        return res.send(authService.login(req.query.id));
    }
}

export default AuthController;