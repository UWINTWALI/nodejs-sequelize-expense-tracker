const User = require('./User'); // Import the User model
const Category = require('./Category'); // Import the Category model
const Expense = require('./Expense'); // Import the Expense model
const PaymentMethod = require('./PaymentMethod'); // Import the PaymentMethod model
const Budget = require('./Budget'); // Import the Budget model

// Define associations
User.hasMany(Category, { foreignKey: 'user_id' });// One User can have many Categories

User.hasMany(Expense, { foreignKey: 'user_id' });// One User can have many Expenses

User.hasMany(PaymentMethod, { foreignKey: 'user_id' });// One User can have many Payment Methods

User.hasMany(Budget, { foreignKey: 'user_id' });// One User can have many Budgets

Category.belongsTo(User, { foreignKey: 'user_id' });// A Category belongs to one User

Category.hasMany(Expense, { foreignKey: 'category_id' });// A Category can have many Expenses

Expense.belongsTo(User, { foreignKey: 'user_id' });// An Expense belongs to one User

Expense.belongsTo(Category, { foreignKey: 'category_id' });// An Expense belongs to one Category

Budget.belongsTo(User, { foreignKey: 'user_id' });// A Budget belongs to one User

Budget.belongsTo(Category, { foreignKey: 'category_id' });// A Budget belongs to one Category

module.exports = {
  User,
  Category,
  Expense,
  PaymentMethod,
  Budget,
};
