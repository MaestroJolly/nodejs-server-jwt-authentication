"use strict";

import { Strategy } from 'passport-local';
import * as bcrypt from 'bcryptjs';

import sequelize from '../../models';

import User from '../../models/user.model';

const UserRepository = sequelize.getRepository(User);


export class LocalStrategy{

    constructor(passport: any){
        this.initiateLocalStrategy(passport);
    }

    async comparePassword(attempt: string, password: string): Promise<any> {
        return await bcrypt.compare(attempt, password);
    }
    
    async validateUser(email: string, pass: string): Promise<any> {
        const user = await UserRepository.findOne({raw:true, where:{
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
                const user = await UserRepository.findOne({raw:true, where:{
                    email: email
                    }
                });

                if(!user){
                    return done(null, false, { message: 'Invalid Email'});
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