const router = require('express').Router();
const { Plants } = require('../../models');
const { Op } = require("sequelize");


//figure out in what format to pass in data and test if teh query actually works, also need || && separate properties one of the names might not match the search string
router.post('/', async (req, res) => {
    console.log(req.body.plant)
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
        const plant = plantData.map((post) => post.get({ plain: true }));

        // Pass serialized data into template
        // res.render('place holder', { plant });
        // res.end(JSON.stringify(plantData));
        res.json(plantData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;