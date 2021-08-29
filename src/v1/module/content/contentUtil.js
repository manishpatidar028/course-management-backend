const My = require('jm-ez-mysql');
const Table = require('../../../helper/table');
const contentUtils = {};

contentUtils.getcontentData = async () => {
    try {
        const fields =
            `bk.id,
            co.name as categoryName,
            bk.description,
            co.id,
            bk.category
            `;
        const joinQuery = `${Table.CONTENT} bk
            INNER JOIN ${Table.CATEGORY} co ON co.id = bk.category`;
        const result = await My.findAll(joinQuery, fields);
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

contentUtils.addcontentData = async (data) => {
    try {
        console.log("data::", data);
        const result = await My.insert('content', data);
        return result.insertId;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = contentUtils;