const { DataTypes } = require('sequelize');
const sequelize = require('../database');

// Define the PaymentMethod model
const PaymentMethod = sequelize.define('PaymentMethod', {
  payment_method_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Automatically increment the payment_method_id
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false, // user_id cannot be null
  },
  payment_method_name: {
    type: DataTypes.STRING,
    allowNull: false, // payment_method_name cannot be null
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
  tableName: 'payment_methods', // Specify the table name in the database
});

module.exports = PaymentMethod;
