const Photo = require("../models/Photo");
const User = require("../models/User")
const mongoose = require("mongoose");

// Insert a photo, with an user realted to it

const insertPhoto = async (req, res) => {
  const { title } = req.body;
  const image = req.file.filename;

  const reqUser = req.user;

  const user = await User.findById(reqUser._id);

  // Create photo
  const newPhoto = await Photo.create({
    image,
    title,
    userId: user._id,
    username: user.name,
  });

  // If photo was created sucessfully, return the token
  if (!newPhoto) {
    res.status(422).json({
      error: ["Houve um erro, por favor tente mais tarde"],
    });
    return;
  }

  res.status(201).json(newPhoto);

};

// Remove a photo from DB
const deletePhoto = async (req, res) => {
  const { id } = req.params;

  const reqUser = req.user;

  const photo = Photo.findById(mongoose.Types.ObjectId(id));

  // Check if photo exists

}

module.exports = {
  insertPhoto,
};