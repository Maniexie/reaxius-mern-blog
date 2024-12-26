const express = require("express");
const chatController = require("../controllers/chat_controller");

const router = express.Router();

router.get("/chats", chatController.getChats);
router.post("/chat", chatController.createChat);

module.exports = router;
