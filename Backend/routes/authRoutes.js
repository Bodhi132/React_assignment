const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const passportSetup = require('../middleware/passport');
const secret = 'asdfe45we45w345wegw345werjktjwertkj';

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    const token = jwt.sign({ user: req.user }, secret);
    res.redirect('/home?token=' + token);
  });

// router.get('/apple',
//   passport.authenticate('apple'));

// router.post('/apple/callback', 
//   passport.authenticate('apple', { failureRedirect: '/login' }),
//   function(req, res) {
//     const token = jwt.sign({ user: req.user }, secret);
//     res.redirect('/home?token=' + token);
//   });

module.exports = router;
