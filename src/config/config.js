require('dotenv').config();

const config = {
    port: process.env.PORT,
    secretKey: process.env.SECRET_KEY
};

module.exports = { config };
