const sequelize = require('../config/connection');
const seedPlants = require('./plantSeeds');
const seedUser = require('./userSeeds');
const seedPost = require('./postSeeds'); 
const categorySeeds = require('./categorySeeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await categorySeeds();
  // await seedPlants();
  await seedUser();
 
  await seedPost();

  process.exit(0);
};

seedAll();