import { ExtractJwt, Strategy } from 'passport-jwt';
import { Passport } from 'passport';

const passport = new Passport;


export class JwtStrategy{
    
    constructor(){
        // passport.use(new Strategy(opts, function(jwt_payload, done) {
        //     User.findOne({id: jwt_payload.sub}, function(err, user) {
        //         if (err) {
        //             return done(err, false);
        //         }
        //         if (user) {
        //             return done(null, user);
        //         } else {
        //             return done(null, false);
        //             // or you could create a new account
        //         }
        //     });
        // }));
    }

    async validate(payload: any){


    }
}