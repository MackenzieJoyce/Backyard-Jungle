const router = require('express').Router();
const { Plants } = require('../../models');
const { Op } = require("sequelize");


//figure out in what format to pass in data and test if teh query actually works, also need || && separate properties one of the names might not match the search string
router.post('/', async (req, res) => {
    // console.log(req.body.plant)
    try {
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

        // Pass serialized data into template
        console.log(plants);
        console.log(plants[0].Common_Name);
        //apparantly all fo the parameters go into the same object container as layout, took me hours to figure out.
        res.render('test', { layout: 'home', plants } );
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;