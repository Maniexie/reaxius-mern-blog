const User = require("../models/Users");
const bcrypt = require("bcrypt");
const generatePassword = require("generate-password");

//===============================AUTH===============================

// Register
exports.register = async (req, res) => {
  // tangkap data di postman
  const { name, email, password, confirmPassword, phone, country, address } =
    req.body;
  try {
    // cek apakah email sudah terdaftar
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // buat user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      confirmPassword,
      role: "user",
      phone,
      country,
      address,
    });

    // simpan user
    await user.save();

    // kirim response berhasil
    res.status(201).json({
      status_code: 201,
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    // kirim response error
    res.status(500).json({
      status_code: 500,
      success: false,
      message: error.message,
    });
  }
};

// Login
exports.login = async (req, res) => {
  // tangkap data
  const { email, password } = req.body;
  try {
    // cari user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // compare & cek password
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    console.log("data email " + email + " password " + password);
    // kirim response berhasil
    res.status(200).json({
      status_code: 200,
      success: true,
      message: "User logged in successfully",
      user,
    });
  } catch (error) {
    // kirim response error
    res.status(500).json({
      status_code: 500,
      success: false,
      message: error.message,
    });
  }
};

//logout
exports.logout = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json({
        status_code: 200,
        success: true,
        message: "User logged out successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      status_code: 500,
      success: false,
      message: error.message,
    });
  }
};

exports.forgotPassword = async (req, res) => {
  // tangkap data
  const { email } = req.body;
  try {
    // cek email user , jika tidak ada kirim response error
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // cari user berdasarkan email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // generate password
    const newPassword = generatePassword.generate({
      length: 10,
      lowercase: true,
      numbers: true,
    });

    // hash & update password
    user.password = await bcrypt.hash(newPassword, 10);

    // simpan user (simpan perubahan password)
    await user.save();

    // kirim response berhasil
    res.status(200).json({
      status_code: 200,
      success: true,
      message: "Password reset link sent to your email",
      newPassword,
    });
  } catch (error) {
    // kirim response error
    res.status(500).json({
      status_code: 500,
      success: false,
      message: error.message,
    });
  }
};

// ===============================USERS===============================

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      status_code: 200,
      success: true,
      message: "Users retrieved successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      status_code: 500,
      success: false,
      message: error.message,
    });
  }
};

// get user by id
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json({
      status_code: 200,
      success: true,
      message: "User retrieved successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      status_code: 500,
      success: false,
      message: error.message,
    });
  }
};

// update user by id
exports.updateUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    const { address } = req.body;
    user.address = address;
    await user.save();
    res.status(200).json({
      status_code: 200,
      success: true,
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      status_code: 500,
      success: false,
      message: error.message,
    });
  }
};

// delete user by id
exports.deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);

    res.status(200).json({
      status_code: 200,
      success: true,
      message: "User deleted successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      status_code: 500,
      success: false,
      message: error.message,
    });
  }
};
