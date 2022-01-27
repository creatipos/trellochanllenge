// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    API_KEY: process.env.API_KEY,
    SERVER_KEY: process.env.SERVER_KEY,
    API_URL: process.env.API_URL,
    PORT:process.env.PORT
};