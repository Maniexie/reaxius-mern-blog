const Post = require("../models/Post");

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("user_id", "name profile_picture");
    res.status(200).json({
      status_code: 200,
      success: true,
      message: "Posts retrieved successfully",
      posts,
    });
  } catch (error) {
    res.status(500).json({
      status_code: 500,
      success: false,
      message: error.message,
    });
  }
};

// Get post by id
exports.getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id).populate(
      "user_id",
      "name profile_picture"
    );
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({
      status_code: 200,
      success: true,
      message: "Post retrieved successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({
      status_code: 500,
      success: false,
      message: error.message,
    });
  }
};

// Create a new post
exports.createPost = async (req, res) => {
  const { user_id, content, media, media_type } = req.body;
  try {
    const post = new Post({ user_id, content, media, media_type });
    await post.save();
    res.status(201).json({
      status_code: 201,
      success: true,
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({
      status_code: 500,
      success: false,
      message: error.message,
    });
  }
};

// Update a post
exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { content, media, media_type } = req.body;
  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    post.content = content;
    post.media = media;
    post.media_type = media_type;
    await post.save();
    res.status(200).json({
      status_code: 200,
      success: true,
      message: "Post updated successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({
      status_code: 500,
      success: false,
      message: error.message,
    });
  }
};

// Delete a post
exports.deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByIdAndDelete(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({
      status_code: 200,
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status_code: 500,
      success: false,
      message: error.message,
    });
  }
};
