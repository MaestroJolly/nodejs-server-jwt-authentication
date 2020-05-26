import { ExtractJwt, Strategy } from 'passport-jwt';

import { appConfig } from '../../config';

import sequelize from '../../models';

import User from '../../models/user.model';

const UserRepository = sequelize.getRepository(User);


export class JwtStrategy{
    
    constructor(passport: any){
        this.initiateJwtStrategy(passport);
    }

    async initiateJwtStrategy(passportArg: any){

        passportArg.use(new Strategy({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: appConfig.jwtsecretkey,
        }, async (jwt_payload: any, done: CallableFunction) => {

            try {
                
                const user = await UserRepository.findOne({ raw: true, where: { id: jwt_payload.sub }, attributes: ['id','firstName','lastName','otherName','email','age','sex','country','isAdmin','createdAt','updatedAt' ] });

                if(!user){
                    return done(null, false, { message: "No user found" });
                }
                return done(null, user);
            } catch (error) {
                return done(null, false, { message: error.message });
            }
        }));
    }
}