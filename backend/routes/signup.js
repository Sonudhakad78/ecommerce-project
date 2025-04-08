const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.json({ message: 'signup successful!' });
  } catch (error) {
    console.error('signup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;