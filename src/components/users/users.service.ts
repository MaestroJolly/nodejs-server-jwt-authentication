'use strict';

import { UsersRegisterDTO } from './users.register.dto';

import * as bcrypt from 'bcryptjs';

const models = require('../../../models');


export class UsersService {

    constructor(){
    }

    async hashPassword(password: string): Promise<any> {
        return await bcrypt.hash(password, 10);
    }

    confirmPassword(password: string, confirmPassword: string){
        if(!password){
            throw new Error('password is required');
        }

        if(!confirmPassword){
            throw new Error('confirm password is required');
        }

        if(password !== confirmPassword){
            throw new Error('password mismatch');
        }
    }

    async register(params: UsersRegisterDTO): Promise<any> {
        this.confirmPassword(params.password, params.confirmPassword);
        delete params.confirmPassword;
        const hashPassword = await this.hashPassword(params.password);
        delete params.password;
        params.password = hashPassword;
        return await models.User.create(params);
    }

};