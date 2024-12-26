const express = require("express");
const http = require("http");
const chatModel = require("../models/Chat");
require("dotenv").config();
const { Server } = require("socket.io");

// Setup server and Socket.IO
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.SERVER_URL,
    methods: ["GET", "POST"],
  },
});

// Socket.IO logic
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Handle incoming chat messages
  socket.on("sendMessage", async ({ sender, receiver, message }) => {
    try {
      // Save message to the database
      const newChat = new chatModel({ sender, receiver, message });
      await newChat.save();

      // Emit the message to the receiver
      io.emit("receiveMessage", newChat);
    } catch (error) {
      console.error("Error saving message:", error.message);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// HTTP REST API logic
exports.getChats = async (req, res) => {
  const { sender, receiver } = req.body;
  try {
    const chats = await chatModel
      .find({
        $or: [
          { sender: sender, receiver: receiver },
          { sender: receiver, receiver: sender },
        ],
      })
      .sort({ timestamp: -1 });

    if (!chats) {
      return res.status(404).json({ message: "Chats not found" });
    }

    console.log(chats);

    res.status(200).json({
      status_code: 200,
      chats,
      success: true,
      message: "Chats retrieved successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createChat = async (req, res) => {
  const { sender, receiver, message } = req.body;
  try {
    const newChat = new chatModel({ sender, receiver, message });

    if (!newChat) {
      return res.status(404).json({ message: "Chat not foundasd" });
    }
    await newChat.save();

    res.status(201).json(newChat);

    // Emit the new message to the receiver in real-time
    io.emit("receiveMessage", newChat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export server for use in the main app
exports.server = server;
