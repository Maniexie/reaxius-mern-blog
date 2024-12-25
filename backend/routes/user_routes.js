const express = require("express");
const userController = require("../controllers/user_controller.js");

const router = express.Router();

//auth
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout/:id", userController.logout);
router.post("/forgot-password", userController.forgotPassword);

//users
router.get("/users", userController.getAllUsers);
router.get("/user/:id", userController.getUserById);
router.put("/user/:id", userController.updateUserById);
router.delete("/user/:id", userController.deleteUserById);

module.exports = router;
