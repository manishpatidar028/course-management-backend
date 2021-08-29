var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var auth = require('../v1/module/auth/authUtil');
var config = require('../config/main');

// Setup work and export for the JWT passport strategy
module.exports = function (passport) {
    var opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeader(),
        secretOrKey: process.env.SECRET,
    };
    passport.use(new JwtStrategy(opts, function (jwt_payload, callback) {
        auth.checkUserExist({ email: jwt_payload.user_email }, function (res) {
            var user = res;
            callback(null, user);
        }, function (err) {
            return callback(err, false);
        });
    }));
};