const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const connectToDB = require('./db/db');
const userRoutes = require('./routes/user.routes');
const app = express();
const cookieParser = require('cookie-parser');
const captainRoutes = require('./routes/captain.routes');

// Connect to DB
connectToDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
// Routes
app.use('/users', userRoutes);
app.use('/captains', captainRoutes);


module.exports = app;
