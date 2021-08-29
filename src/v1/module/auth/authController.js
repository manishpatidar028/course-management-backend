const authUtils = require("./authUtil");

const authContoller = {}

authContoller.login = async (req, res) => {
    try {
        const authData = {
            email: req.body.email,
        }
        const response = await authUtils.addauthData(authData);
        return res.status(200).json({ message: "auth added." });
    } catch (err) {
        return res.status(500).json("Internal server error");
    }
}

authContoller.signin = async (req, res) => {
    try {
        const authData = {
            name: req.body.name,
        }
        const response = await authUtils.addauthData(authData);
        return res.status(200).json({ message: "auth added." });
    } catch (err) {
        return res.status(500).json("Internal server error");
    }
}

module.exports = authContoller;