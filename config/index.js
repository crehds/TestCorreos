require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PORT,
};

module.exports = { config };
