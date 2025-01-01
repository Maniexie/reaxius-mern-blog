const Comment = require("../models/Comment");

const createComment = async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  } finally {
    res.end();
  }
};

module.exports = { createComment, deleteComment, updateComment };
