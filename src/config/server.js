const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  port: process.env.PORT || 8000,
  host: process.env.HOST || 'http://localhost',
}

