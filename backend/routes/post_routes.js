const express = require("express");
const post_controller = require("../controllers/post_controller");

const router = express.Router();

router.get("/posts", post_controller.getAllPosts);
router.get("/post/:id", post_controller.getPostById);
router.post("/post", post_controller.createPost);
router.put("/post/:id", post_controller.updatePost);
router.delete("/post/:id", post_controller.deletePost);

module.exports = router;
