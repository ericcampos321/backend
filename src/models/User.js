const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    profileImage: String,
    password: String,
    bio: String,
  },
  {
    timestamps: true,
  }
);


const User = mongoose.model("User", userSchema);

module.exports = User;