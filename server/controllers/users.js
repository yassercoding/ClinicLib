const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const register = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const payload = {
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    };
    const userToken = jwt.sign(payload, JWT_SECRET);
    const options = { httpOnly: true, expires: new Date(Date.now() + 900000) };
    console.log('JWT TOKEN', userToken);
    res.status(201).cookie('userToken', userToken, options).json({ user: payload });
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};
const login = async (req, res) => {
  const userDocument = await User.findOne({ email: req.body.email });
  console.log('USER', userDocument.password, req.body.password);
  if (!userDocument) {
    res.status(400).json({ message: 'Invalid Login Attempt' });
  } else {
    try {
      const isPasswordValid = await bcrypt.compare(req.body.password, userDocument.password);
      if (!isPasswordValid) {
        res.status(400).json({ message: 'Invalid Login Attempt' });
      } else {
        const payload = {
          _id: userDocument._id,
          username: userDocument.username,
          email: userDocument.email,
        };
        const userToken = jwt.sign(payload, JWT_SECRET);
        const options = { httpOnly: true, expires: new Date(Date.now() + 90000000) };
        console.log('JWT TOKEN', userToken);
        res.cookie('userToken', userToken, options).json({ user: payload });
      }
    } catch (error) {
      res.status(500).json({ message: error.message, errors: error.errors });
    }
  }
};
const logout = (req, res) => {
  res.clearCookie('userToken');
  res.json({ message: 'You have Successfully Logged Out!' });
};
const getLoggedInUser = async (req, res) => {
  try {
    const currentUser = await User.findOne({ _id: req.user._id }).select('-password');
    res.json(currentUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
  logout,
  getLoggedInUser,
};
