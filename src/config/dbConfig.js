/* Here i have used MySQL Wrapper for NodeJS */

var My = require("jm-ez-mysql");
require('dotenv').config();

const { DBHOST, DBUSER, DBPASSWORD, DATABASE } = process.env

// Init DB Connection
let connectDB = () => {
    My.init({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'course_management',
    });
}
module.exports = connectDB;