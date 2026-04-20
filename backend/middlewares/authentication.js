const jwt = require("jsonwebtoken");
const userModel = require("../models/userSchema")

const authentication = async (req, res, next) => {
    try {
        if (!req.headers.authentication) {
        return res.json("user not logged in")
        }

        const token = req.headers.authentication.split(" ")[1];
        const verify = jwt.verify(token)
        req.user = await userModel.findById(verify.id).select("-password");
        if (req.user) {
            next()
        }

        else {
            res.status(404).json("user not found")
        }
    }

    catch (err) {
        res.status(401).json("unauthorized")
    }

}

module.exports = {authentication}