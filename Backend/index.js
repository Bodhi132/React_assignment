const express = require('express');
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes');
const cors = require('cors')
const session = require('express-session');
const passport = require('passport');
const OAuth2Strategy = require("passport-google-oauth20").Strategy
const userdb = require("./models/user")
const MongoStore = require('connect-mongo');

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'https://react-assignment-frontend.vercel.app', // or '*' to allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

const uri = "mongodb+srv://bodhi:W7Jy92luuZQgGvNN@cluster0.xanjw9x.mongodb.net/?retryWrites=true&w=majority"
const clientid = '612556527469-pic78u7se0rbmg3h32ms00dg5bmcuimn.apps.googleusercontent.com'
const clientsecret = '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'

app.use(session({
  secret: '2349&$#adfhaqdef238huefu', 
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: uri })
}));

app.use(passport.initialize())

passport.use(
  new OAuth2Strategy({
    clientID: clientid,
    clientSecret: clientsecret,
    callbackURL: "/auth/google/callback",
    scope: ["profile", "email"]
  },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      try {
        let user = await userdb.findOne({ id: profile.id });

        if (!user) {
          user = new userdb({
            email: profile.emails[0].value,
            id: profile.id,
            image:profile.photos[0].value
          });

          await user.save();
        }

        return done(null, user)
      } catch (error) {
        return done(error, null)
      }
    }
  )
)

passport.serializeUser((user,done)=>{
  done(null,user);
})

passport.deserializeUser((user,done)=>{
  done(null,user);
});

mongoose.connect(uri);

// Routes
app.use('/auth', authRoutes);

app.listen(3000, () => {
  console.log('App listening on port 4000');
})