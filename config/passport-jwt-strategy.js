const passport= require('passport');
const JWTStrategy= require('passport-jwt').Strategy;
const ExtractJWT= require('passport-jwt').ExtractJwt;

const User= require('../models/customer');

let opts={
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),

    secretOrKey : 'codeail'

}

passport.use(new JWTStrategy(opts, function(jwtpayload, done) {
    User.findById(jwtpayload._id, function(err, user) {
        if (err) {
           console.log('error in findng user from JWT',err);
           return ;

        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

module.exports= passport;
