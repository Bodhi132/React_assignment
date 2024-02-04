const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const secret = 'asdfe45we45w345wegw345werjktjwertkj';

exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    const token = jwt.sign({ _id: user._id }, secret);

    res.json({ token, message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
  
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign({ _id: user._id }, secret);

  res.json({ token });
};

exports.jwtLogout = (req, res) => {
  
  res.json({ token: null, message: 'User logged out successfully' });
  
};

exports.googleLogout = (req, res) => {
  req.session.destroy((err) => {
    if(err) {
      return res.status(500).json({ message: 'Error logging out' });
    }
    res.json({ message: 'User logged out successfully' });
  });
};
