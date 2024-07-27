const sequelize = require('./database'); // Import the configured sequelize instance
const models = require('./models'); // Import all models

// Sync all models with the database
sequelize.sync({ force: true }) // force: true will drop the table if it already exists
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Error creating database & tables:', err);
  });
