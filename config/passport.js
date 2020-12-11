const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const passport = require('passport');
const models = require('../model');

const user = models.user;
const author = models.author;
const forget = models.forget;


const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'myVerySecret'

module.exports = passport =>{
    passport.use('jwt.users',new JwtStrategy(
        jwtOptions,(jwt_payload, done)=>{
            user.findOne({where:{id:jwt_payload.id}}).then(user =>{
                console.log(user);
                console.log(jwt_payload);
                if(user){
                    return done(null, user);
                }
                return done(null, false);
            }).catch(err =>{
                console.log(err);
            });
        }
    ));

    
        passport.use('jwt.authors',new JwtStrategy(
            jwtOptions,(jwt_payload, done)=>{
                author.findOne({where:{id:jwt_payload.id}}).then(author =>{
                    if(author){
                        return done(null, author);
                    }
                    return done(null, false);
                }).catch(err =>{
                    console.log(err);
                });
            }
        ));
    
        passport.use('jwt.forget',new JwtStrategy(
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

