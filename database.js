require('dotenv').config();
// Import the Sequelize constructor from the library
const { Sequelize } = require('sequelize');

// Create a new instance of Sequelize to connect to the database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST, // Specify the database host
  dialect: 'mysql',  // Specify the database dialect (MySQL)
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Export the sequelize instance to use it in other files
module.exports = sequelize;
