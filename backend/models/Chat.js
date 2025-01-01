const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Referensi ke koleksi User
    required: true,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Referensi ke koleksi User
    required: true,
  },
  message: [
    {
      sender_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Referensi ke koleksi User
        required: true,
      },
      text: {
        type: String,
        // required: true,
        trim: true,
        default: "",
      },
      media: {
        type: String,
        // required: true,
        default: "",
      },
      media_type: {
        type: String,
        enum: ["image", "video"],
        default: "",
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Chat", chatSchema);
