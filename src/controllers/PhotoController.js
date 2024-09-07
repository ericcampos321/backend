const Photo = require("../models/Photo");

const mongoose = require("mongoose");

// Insert a photo, with an user realted to ir

const insertPhoto = async (req, res) => {
  const { title } = req.body;
  const image = req.file.filename;

  res.send("Photo insert");
};

module.exports = {
  insertPhoto,
};