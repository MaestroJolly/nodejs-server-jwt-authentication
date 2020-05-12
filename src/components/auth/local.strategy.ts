"use strict";

import { Strategy } from 'passport-local';
import * as bcrypt from 'bcryptjs';

const models = require('../../../models');


export class LocalStrategy{

    constructor(passport: any){
        this.initiateLocalStrategy(passport);
    }

    async comparePassword(attempt: string, password: string): Promise<any> {
        return await bcrypt.compare(attempt, password);
    }
    
    async validateUser(email: string, pass: string): Promise<any> {
        const user = await models.User.findOne({raw:true, where:{
                email: email
            }
        });
        if (user && await this.comparePassword(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async initiateLocalStrategy(passportArg: any){
        passportArg.use(new Strategy({usernameField: 'email', passwordField: 'password'}, async (email: string, password: string, done: CallableFunction) =>{

            try {
                const user = await models.User.findOne({raw:true, where:{
                    email: email
                    }
                });

                if(!user){
                    return done(null, false, { message: 'This email is not registered'});
                }

                if(user && await this.comparePassword(password, user.password)) {
                    const { password, ...result } = user;
                    return done(null, result);
                }
                return done(null, false, { message: 'Invalid Password'});
            } catch (error) {
                return done(null, false, { message: error.message});
            }
        }));
    }
}