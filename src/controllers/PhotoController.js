const Photo = require("..models/Photos");

const mongoose = require("mongoose");

// Insert a photo, with an user realted to ir

const insertPhoto = async (req, res) => {
  const { title } = req.body;
  const image = req.file.filename;

  console.log("req.body");

  res.send("Photo insert");
};

module.exports = {
  insertPhoto,
}