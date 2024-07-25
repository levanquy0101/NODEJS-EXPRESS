require('dotenv').config();

const config = {
    port: process.env.PORT,
    dbUrl: process.env.DB_URL,
    secretKey: process.env.SECRET_KEY
};

module.exports = { config };
