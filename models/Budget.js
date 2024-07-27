const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User'); // Import the User model
const Category = require('./Category'); // Import the Category model

// Define the Budget model
const Budget = sequelize.define('Budget', {
  budget_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Automatically increment the budget_id
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false, // user_id cannot be null
    references: {
      model: User, // Reference the User model
      key: 'user_id',
    },
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false, // category_id cannot be null
    references: {
      model: Category, // Reference the Category model
      key: 'category_id',
    },
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false, // amount cannot be null
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false, // start_date cannot be null
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false, // end_date cannot be null
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
  tableName: 'budgets', // Specify the table name in the database
});

module.exports = Budget;
