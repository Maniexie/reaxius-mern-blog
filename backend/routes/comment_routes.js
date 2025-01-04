const express = require("express");
const comment_controller = require("../controllers/comment_controller");

const router = express.Router();

router.get("/comments", comment_controller.getComment);
router.get("/comment/:id", comment_controller.getCommentById);
router.post("/comment", comment_controller.createComment);
router.put("/comment/:id", comment_controller.updateComment);
router.delete("/comment/:id", comment_controller.deleteComment);

module.exports = router;
