const express = require('express');
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: ['http://localhost:5173','https://react-assignment-frontend.vercel.app','https://react-assignment-frontend-acykept6y-bodhi132.vercel.app']}));

const uri = "mongodb+srv://bodhi:W7Jy92luuZQgGvNN@cluster0.xanjw9x.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri);

// Routes
app.use('/auth', authRoutes);

app.listen(3000, () => console.log('Server started on port 3000'));
