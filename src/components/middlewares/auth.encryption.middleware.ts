"use strict";

import { Request, Response, NextFunction } from 'express';


class AuthEncryptionMiddleware {

    encrypt(req: Request, res: Response, next: NextFunction){
        return next();
    }
}

export default AuthEncryptionMiddleware;