const userModel = require("../models/userSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = (req, res) => {
    const {username, password, email, name} = req.body;
    const newUser = new userModel({
        username, name, password, email
    })

    newUser.save().then((result)=>{
        res.status(201).json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
}

const login = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await userModel.findOne({email})
        if (!user) {
            res.status(404).json("invalid user or password")
        }

        else {
            const isValid = await bcrypt.compare(password, user.password);
            if (!isValid) {
                res.json("invalid user or password")
            }

            else {
                const payload = {
                    id: user._id,
                    role: user.role
                }
                const options = {
                    expiresIn: "5h"
                }
                const userToken = jwt.sign(payload, process.env.SECRET_KEY, options)
                console.log("logged in")
                res.json({
                    success: true,
                    message: "logged in successfully",
                    token: userToken
                })
            }
        }
    }

    catch(err) {
        res.status(500).json(err)
    }
}

const updateData = async (req, res) => {
    const id = req.user._id;
    const updates = req.body;
    try {
        const user = await userModel.findById(id);
        if (!user) {
            res.status(404).json("not found")
        }

        else {
            Object.keys(updates).forEach(key=>{
                user[key] = updates[key]
            })

            const updatedUser = await user.save();
            res.status(200).json(updatedUser)
        }
    }
    catch(err){
        res.status(500).json(err)
    }
}

const getUserData = async (req, res) => {
    const id = req.user._id;
    try {
        const user = await userModel.findOne(id);
        if (!user) {
            res.status(404).json("user not found")
        }
        else {
            res.status(200).json(user)
        }
    }

    catch(err) {
        res.status(500).json(err)
    }
}

const getUsers = (req, res) => {
    userModel.find({}).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
}

module.exports = {register, login, updateData, getUserData, getUsers}