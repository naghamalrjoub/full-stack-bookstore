const jwt = require("jsonwebtoken");
const userModel = require("../models/userSchema")

const authentication = async (req, res, next) => {
    console.log(req.params)
    try {
        if (!req.headers.authorization) {
            return res.json("user not logged in")
        }

        const token = req.headers.authorization.split(" ")[1];
        const verify = await jwt.verify(token, process.env.SECRET_KEY)
        console.log(verify.id)
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

module.exports = authentication