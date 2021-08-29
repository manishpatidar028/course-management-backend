const categoryUtils = require("./categoryUtil");

const categoryContoller = {}

categoryContoller.addCategory = async (req, res) => {
  console.log(req.body)
}

categoryContoller.getCategory = async (req, res) => {
  try {
    const response = await categoryUtils.getCategoryData();
    return res.status(200).json({ success: true, statusCode: 200, data: response });
  } catch (err) {
    return res.status(500).json("Internal server error");
  }
}

categoryContoller.addCategory = async (req, res) => {
  try {
    const categoryData = {
      name: req.body.name,
    }
    const response = await categoryUtils.addCategoryData(categoryData);
    return res.status(200).json({ message: "Category added." });
  } catch (err) {
    return res.status(500).json("Internal server error");
  }
}

module.exports = categoryContoller;