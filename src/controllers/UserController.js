const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

//Genarete user token
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "7d",
  });
};

// Register user and sign in
const register = async (req, res) => {
  const { name, email, password } = req.body;

  //check if user exists
  const user = await User.findOne({ email });

  if (user) {
    res.status(422).json({ error: ["Por favor, utilize outro e-mail"] });
    return;
  }

  //Generation password hash
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  //Create user
  const newUser = await User.create({
    name,
    email,
    password: passwordHash,
  });

  //if user was created sucessfully, return the token
  if (!newUser) {
    res
      .status(422)
      .json({ errors: ["Houve um erro, por favor tente mais tarde"] });
    return;
  }

  res.status(201).json({
    _id: newUser._id,
    profileImage: user.profileImage,
    token: generateToken(newUser._id),
  });
};

//Sign user in
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  //Check if user exists
  if (!user) {
    res.status(404).json({ errors: ["Usuário não encontrado."] });
    return;
  }

  //Check if password metches
  if (!(await bcrypt.compare(password, user.password))) {
    res.status(422).json({ errors: ["Senha invalida"] });
    return;
  }
};

module.exports = {
  register,
  login,
};
