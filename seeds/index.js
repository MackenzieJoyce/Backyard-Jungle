const sequelize = require('../config/connection');
const seedPlants = require('./plantSeeds');
const seedUser = require('./userSeeds');
const seedPost = require('./postSeeds')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPlants();

  await seedPost();

  await seedUser();

  process.exit(0);
};

seedAll();