const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
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
