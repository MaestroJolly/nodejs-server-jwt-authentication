import { ExtractJwt, Strategy } from 'passport-jwt';

const models = require('../../../models');

const config = require('../../../config');


export class JwtStrategy{
    
    constructor(passport: any){
        this.initiateJwtStrategy(passport);
    }

    async initiateJwtStrategy(passportArg: any){

        passportArg.use(new Strategy({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.jwtsecretkey,
        }, async (jwt_payload: any, done: CallableFunction) => {

            try {
                
                const user = await models.User.findOne({id: jwt_payload.sub});

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