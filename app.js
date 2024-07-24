// app.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

// Middleware to parse JSON
app.use(express.json());

// Import routes
const userRoutes = require('./routes/user');

// Use routes
app.use('/api/users', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
