
// const jwtToken = {};
// /*
// * getAuthToken
// */
// jwtToken.getAuthToken = (data) => {
//     return jwt.sign(data, process.env.JWT_SECRET);
// }

// /*
// * decodeAuthToken
// */
// jwtToken.decodeAuthToken = (token) => {
//     if (token) {
//         try {
//             return jwt.verify(token, process.env.JWT_SECRET);
//         } catch (error) {
//             return false;
//         }
//     }
//     return false;
// }

// module.exports = jwtToken;

var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var db = require('../app/db');
var config = require('../config/main');

// Setup work and export for the JWT passport strategy
module.exports = function (passport) {
    var opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeader(),
        secretOrKey: process.env.SECRET,
    };
    passport.use(new JwtStrategy(opts, function (jwt_payload, callback) {
        db.findUser({ email: jwt_payload.user_email }, function (res) {
            var user = res;
            delete user.password;
            callback(null, user);
        }, function (err) {
            return callback(err, false);
        });
    }));
};