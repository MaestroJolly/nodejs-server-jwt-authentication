'use strict';

// import RouteHandler from '../../libraries/route.handler';
import { Request, Response, NextFunction } from "express";

import  { AuthService }  from '../auth/auth.service';

import { Passport } from 'passport';

import { LocalStrategy } from '../auth/local.strategy';

const authService = new AuthService;

const passport = new Passport;

new LocalStrategy(passport);


export class AuthController{

    constructor(){
    }

    async login(req: Request, res: Response, next: NextFunction){

        passport.authenticate('local', async(err, user, info) =>{
            if(err){
                return res.status(400).send({ message: err.message });
            }

            if(!user){
                return res.status(400).send({ message: info.message });
            }

            try {
                const userToken = await authService.login({email: user.email, id: user.id});
                if(!userToken){
                    throw new Error('Token was not successful created');
                }
                return res.send(userToken);
            } catch (error) {
                return res.status(400).send({ message:error.message });
            }
        })(req, res, next);
    }
};