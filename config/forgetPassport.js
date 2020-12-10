const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const passport = require('passport');
const models = require('../model');

const forget = models.forget;

const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'myVerySecret'

module.exports = passport =>{
    passport.use(new JwtStrategy(
        jwtOptions,(jwt_payload, done)=>{
            forget.findOne({where:{email:jwt_payload.email}}).then(forget =>{
                console.log(forget);
                console.log(jwt_payload);
                if(forget){
                    return done(null, forget);
                }
                return done(null, false);
            }).catch(err =>{
                console.log(err);
            });
        }
    ));
}


