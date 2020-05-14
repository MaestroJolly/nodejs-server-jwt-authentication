"use strict";

import * as bcrypt from 'bcryptjs';
import { Request, Response, NextFunction } from 'express';


export class AuthEncryptionMiddleware {

    encrypt(req: Request, res: Response, next: NextFunction){
        console.log(req.body.password);
        bcrypt.compare
        return next();
    }

    decrypt(req: Request, res: Response, next: NextFunction){
        console.log(req.body.password);
        return next();
    }
};