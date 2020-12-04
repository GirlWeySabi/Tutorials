const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const passport = require('passport');
const models = require('../model');

const user = models.user;
const author = models.author;

const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'myVerySecret'



module.exports = passport =>{
    passport.use(new JwtStrategy(
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
}

