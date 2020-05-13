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
                
                const user = await models.User.findOne({ raw: true, where: { id: jwt_payload.sub }, attributes: ['id','firstName','lastName','otherName','email','age','sex','country','isAdmin','createdAt','updatedAt' ] });

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