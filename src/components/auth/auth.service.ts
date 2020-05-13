'use strict';

import { AuthLoginDTO } from './auth.login.dto';
import * as jwt from 'jsonwebtoken';

import * as bcrypt from 'bcryptjs';

const models = require('../../../models');

const config = require('../../../config');


export class AuthService {

    constructor(){

    }

    async login(params: AuthLoginDTO): Promise<any> {
        const payload = { email: params.email, sub: params.id };
        return {access_token: jwt.sign(payload, config.jwtsecretkey, { expiresIn: 60 })};
    }

};