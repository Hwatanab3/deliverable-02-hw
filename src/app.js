const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const router = require('./routes');
const errorHandler = require('./utils/errorHandler');
require('dotenv').config();

// This is my application
const app = express();

// Middlewares 
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors());

app.use('/api/v1', router);

app.get('/', (req, res) => {
    return res.send("Welcome to my Node.js module deliverable-02");
})

// middlewares after the routes
app.use(errorHandler)

module.exports = app;
