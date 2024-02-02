const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback', 
  passport.authenticate('google', { 
    failureRedirect: 'https://react-assignment-frontend.vercel.app' ,
    successRedirect: 'https://react-assignment-frontend.vercel.app/home'
}));

// app.get("/login/sucess",async(req,res)=>{

//     if(req.user){
//         res.status(200).json({message:"user Login",user:req.user})
//     }else{
//         res.status(400).json({message:"Not Authorized"})
//     }
// })

// app.get("/logout",(req,res,next)=>{
//     req.logout(function(err){
//         if(err){return next(err)}
//         res.redirect("http://localhost:5173/home");
//     })
// })

// router.get('/apple',
//   passport.authenticate('apple'));

// router.post('/apple/callback', 
//   passport.authenticate('apple', { failureRedirect: '/login' }),
//   function(req, res) {
//     const token = jwt.sign({ user: req.user }, secret);
//     res.redirect('/home?token=' + token);
//   });

module.exports = router;
