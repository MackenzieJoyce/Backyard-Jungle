const {Plants} = require("../models");

const plantData = [
    {
        Scientific_Name: "Tagetes erecta",
        Common_Name:"American Marigold",
        Family: "Asteraceae",
        collection_id: 1
    },
    {
        Scientific_Name: "Catharanthus roseus",
        Common_Name:"Annual Vinca",
        Family: "Apocynceae",
        collection_id: 1
    },
    {
        Scientific_Name: "Platycodon grandiflorus",
        Common_Name:"Balloon Flower",
        Family: "Campanulaceae",
        collection_id: 1
    },
]

const seedPlants = () => Plants.bulkCreate(plantData);

module.exports = seedPlants;
