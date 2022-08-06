const router = require('express').Router();
const { Plants } = require('../../models');
const { Op } = require("sequelize");
const fetch = require('node-fetch');

//options for image api
const apiKey = 'AIzaSyAOMapkVritaEyTjG9qlmwvX5q_CjvsrX4';
const searchEID = '41f8fc9ff288c4c86';

//figure out in what format to pass in data and test if teh query actually works, also need || && separate properties one of the names might not match the search string
router.post('/', async (req, res) => {
    // console.log(req.body.plant)

    const plantData = await Plants.findAll({
        where: {
            [Op.or]: [{
                Scientific_Name: {
                    [Op.like]: `%${req.body.plant}`
                }
            },

            {
                Common_Name: {
                    [Op.like]: `%${req.body.plant}`
                }
            }

            ]
        }
    });


    // Serialize data so the template can read it
    const plants = plantData.map((plant) => plant.get({ plain: true }));

    console.log(plantData);

    plants[0]['URL'] = await fetch('https://www.googleapis.com/customsearch/v1?num=1&key='
    + apiKey
    + '&cx='
    + searchEID
    + '&q='
    + plants[0].Common_Name.split(' ').join('%')
    + '+plant')
    .then(response => response.json())  
    .then(response => {
        return response.items[0].pagemap.cse_thumbnail[0].src
    });
        
    // plants[0]['URL'] = 'https://opb-img.plantbook.io/acanthus%20ilicifolius.jpg';

    // Pass serialized data into template
    console.log(plants);
    // console.log(plants[0].Common_Name.split(' ').join('%'));
    //apparantly all fo the parameters go into the same object container as layout, took me hours to figure out.
    res.render('test', { layout: 'testlayout', plants });

});

module.exports = router;