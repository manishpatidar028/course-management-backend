const { request } = require("express");
const authUtils = require("./authUtil");

const authContoller = {}

authContoller.signin = async (req, res) => {
    try {
        const authData = {
            name: req.body.name,
            email: req.body.email,
            image: request.body.image
        }
        const response = await authUtils.addAuthData(authData);
        return res.status(200).json({ message: "auth added." });
    } catch (err) {
        return res.status(500).json("Internal server error");
    }
}

authContoller.isUserExist = async (req, res) => {
    try {
        const authData = {
            email: req.body.email,
        }
        const response = await authUtils.checkUserExist(authData);
        if (response) {
            return res.status(200).json({ message: "User found." });
        } else {
            return res.status(404).json({ message: "User not found." });
        }
    } catch (err) {
        return res.status(500).json("Internal server error");
    }
}

module.exports = authContoller;