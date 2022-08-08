const { Category } = require('../models');

const categoryData = [
  {
    title: 'Outdoor Gardening',
    filename: 'outdoorgardening.jpg'
  },
  {
    title: 'House Plants',
    filename: 'houseplants.png'
  },
  {
    title: 'Large-Scale Trees',
    filename: 'largescaletrees.jpg'
  },
  {
    title: 'Sustainable Food Gardening',
    filename: 'sustainablegardening.jpg'
  },
  {
    title: 'Orchids',
    filename: 'orchids.jpg'
  },
  {
    title: 'Succulents',
    filename: 'succlents.jpg'
  },
  {
    title: 'Edible Plants',
    filename: 'edibleplants.png'
  }
]

const categorySeeds = () => Category.bulkCreate(categoryData);
module.exports = categorySeeds;
