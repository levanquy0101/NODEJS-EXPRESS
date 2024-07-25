const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const { config } = require('./config/config');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;
