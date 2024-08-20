const express = require("express");
const router = express.Router();

//  Controller
const {register} = require("../controllers/UserController");

//Middlewares
const validate = require("../middlewares/handleValidation")
const { userCreateValitation } = require("../middlewares/userValidations")

//Routes
router.post("/register", userCreateValitation(), validate, register);


module.exports = router;
