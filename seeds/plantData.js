const {Plants} = require('../models')

const foundPlants = [
  {
    Scientific_Name: 'Tagetes erecta',
    Common_Name: 'American Marigold'
  },
  {
    Scientific_Name: 'Catharanthus roseus',
    Common_Name: 'Annual Vinca'
  },
  {
    Scientific_Name: 'Platycodon grandiflorus',
    Common_Name: 'Balloon Flower'
  }
]

const seedPlants = () => Plants.bulkCreate(foundPlants)
module.exports = seedPlants