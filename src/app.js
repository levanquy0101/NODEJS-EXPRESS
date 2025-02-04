const express = require('express');
const connectDB = require("./config/db");
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require("morgan");
const routes = require("./routes");
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
connectDB();

// Middlewares
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

// Routes
app.use("/", routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;
