const router = require('express').Router();
const { Plants } = require('../../models');
const { Op } = require("sequelize");
const fetch = require('node-fetch');

//options for image api
const apiKey = 'AIzaSyAOMapkVritaEyTjG9qlmwvX5q_CjvsrX4';
const searchEID = '41f8fc9ff288c4c86';

//figure out in what format to pass in data and test if teh query actually works, also need || && separate properties one of the names might not match the search string
router.get('/', async (req, res) => {
    console.log("REQUEST QUERY TEST: " + req.query)
    console.log(req.query)
    console.log(req.query.plant)
    const plantData = await Plants.findAll({
        where: {
            [Op.or]: [{
                Scientific_Name: {
                    [Op.like]: `%${req.query.plant}`
                }
            },

            {
                Common_Name: {
                    [Op.like]: `%${req.query.plant}`
                }
            }

            ]
        },
        limit: 8
    });

    // Serialize data so the template can read it
    const plants = plantData.map((plant) => plant.get({ plain: true }));
    console.log(plants[4]);
    console.log(plants);
    res.render('profile-dashboard', { layout: 'main', plants });

});

module.exports = router;