const My = require('jm-ez-mysql');
const Table = require('../../../helper/table');
const categoryUtils = {};

categoryUtils.checkUserExist = async (data) => {
    const email = data.email;
    try {
        return await My.first(Table.USER, ["id", "name", "email"],
            "email = ?", [email]);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = categoryUtils;