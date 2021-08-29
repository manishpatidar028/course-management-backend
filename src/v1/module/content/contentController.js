const contentUtils = require("./contentUtil");

const contentContoller = {}

contentContoller.getcontent = async (req, res) => {
  try {
    const response = await contentUtils.getcontentData();
    return res.status(200).json({ success: true, statusCode: 200, data: response });
  } catch (err) {
    return res.status(500).json("Internal server error");
  }
}

contentContoller.addcontent = async (req, res) => {
  try {
    const contentData = {
      content: req.body.content,
      category: req.body.category
    }
    const response = await contentUtils.addcontentData(contentData);
    return res.status(200).json({ message: "content added." });
  } catch (err) {
    return res.status(500).json("Internal server error");
  }
}

module.exports = contentContoller;