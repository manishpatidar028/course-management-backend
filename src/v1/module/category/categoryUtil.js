const My = require('jm-ez-mysql');
const categoryUtils = {};

categoryUtils.getCategoryData = async () => {
    try {
        const fields =
            `id,
                name`;

        const joinQuery = `category`;

        const query = `SELECT ${fields} FROM  ${joinQuery}`;
        const result = await My.query(`${query}`,)
        return result
        console.log("RES::", result);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

categoryUtils.addCategoryData = async (data) => {
    try {
        console.log("data::", data);
        const result = await My.insert('category', data);
        return result.insertId;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = categoryUtils;