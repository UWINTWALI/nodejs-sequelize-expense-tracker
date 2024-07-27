const { DataTypes } = require('sequelize');
const sequelize = require('../database');

// Define the Category model
const Category = sequelize.define('Category', {
  category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Automatically increment the category_id
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false, // user_id cannot be null
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false, // category_name cannot be null
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
  tableName: 'categories', // Specify the table name in the database
});

module.exports = Category;
