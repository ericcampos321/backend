const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;


//Genarete user token

const generateToken = (id) => {
    return jwt.sign({id}, jwtSecret,{
        expiresIn: "7d",
    });
};

// Register user and sign in
const register = async (req, res) => {
    const {name, email, senha} = req.body

    //check if user exists
    const user = await User.findOne({email})
};

module.exports = {
    register,
};