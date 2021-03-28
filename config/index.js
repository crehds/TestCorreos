require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  user: process.env.USER,
  password: process.env.PASSWORD,
};

module.exports = { config };
