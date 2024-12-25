const chatModel = require("../models/chat_model");

exports.getChats = async (req, res) => {
  const { sender, receiver } = req.body;
  try {
    const chats = await chatModel.find({
      $or: [
        { sender: sender, receiver: receiver },
        { sender: receiver, receiver: sender },
      ],
    });
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createChat = async (req, res) => {
  const { sender, receiver, message } = req.body;
  try {
    const newChat = new chatModel({ sender, receiver, message });
    await newChat.save();
    res.status(201).json(newChat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
