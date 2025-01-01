const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile_picture: {
    type: String,
    // required: true,
    default: "https://via.placeholder.com/150",
  },
  bio: {
    type: String,
    // required: true,
    default: "Belum ada bio",
  },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  phone: {
    type: String,
    required: true,
    // default: "08123456789",
    unique: true,
  },
  country: {
    type: String,
    required: true,
    // default: "Indonesia",
  },
  address: {
    type: String,
    // default: "Jalan Ku belum ada",
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
