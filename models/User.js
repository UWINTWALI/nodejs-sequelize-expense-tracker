// Import necessary modules from Sequelize
const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Import the configured sequelize instance

// Define the User model
const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Automatically increment the user_id
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false, // Username cannot be null
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Email must be unique
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false, // Password cannot be null
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, // Default to current date and time
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, // Default to current date and time
  },
}, {
  timestamps: false, // Disable automatic timestamp fields
  tableName: 'users', // Specify the table name in the database
});

// Export the User model to use it in other files
module.exports = User;
