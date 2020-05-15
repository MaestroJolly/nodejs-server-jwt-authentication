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
        // this.confirmPassword(params.password, params.confirmPassword); //temporarily removed, not really needed since we are already using express-validator
        delete params.confirmPassword;
        const hashPassword = await this.hashPassword(params.password);
        delete params.password;
        params.password = hashPassword;

        let getUser = false;
        getUser = await models.User.findOne({raw: true, where:{
            email: params.email
        }, attributes: ['email']});

        if(getUser){
            throw new Error('email is already registered.');
        }
        
        return await models.User.create(params);
    }

};