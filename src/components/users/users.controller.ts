'use strict';

// import RouteHandler from '../../libraries/route.handler';
import { Request, Response, NextFunction } from "express";

import  { UsersService }  from '../users/users.service';

import { Passport } from 'passport';

import { JwtStrategy } from "../auth/jwt.strategy";

const usersService = new UsersService;

const passport = new Passport;

new JwtStrategy(passport);


export class UsersController{

    constructor(){

    }

    async profile(req: Request, res: Response, next: NextFunction){

        passport.authenticate('jwt', async(err, user, info) =>{
            if(err){
                return res.status(400).send({ message: err.message });
            }

            if(!user){
                if(info.name === "TokenExpiredError"){
                    return res.status(401).send({ message: "Unauthorized access" });
                }
                return res.status(401).send({ message: info.message });
            }

            return res.send(user);
        })(req, res, next);
    }
};