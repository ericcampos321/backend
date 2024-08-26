const express = require("express");
const router = express.Router();

//  Controller
const {register, login, getCurrentUser} = require("../controllers/UserController");

//Middlewares
const validate = require("../middlewares/handleValidation");
const { userCreateValitation, loginValidation} = require("../middlewares/userValidations");
const authGuard = require("../middlewares/authGuard");

//Routes
router.post("/register", userCreateValitation(), validate, register);
router.post("/login", loginValidation(), validate, login);
router.get("/profile", authGuard, getCurrentUser);


module.exports = router;
