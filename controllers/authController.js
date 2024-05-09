const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists',existingUser });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save();

  res.status(201).json({ message: 'User registered successfully',newUser });
  } catch (error) {
    
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // Verify password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // Generate JWT
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
  } catch (error) {
    
  }
};


module.exports = {  login ,register};

