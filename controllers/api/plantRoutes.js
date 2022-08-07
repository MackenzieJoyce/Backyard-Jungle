const router = require('express').Router();
const { Plants } = require('../../models');
const { Op } = require("sequelize");
const fetch = require('node-fetch');

//options for image api
// const apiKey = 'AIzaSyAOMapkVritaEyTjG9qlmwvX5q_CjvsrX4';
// const searchEID = '41f8fc9ff288c4c86';

const apiKey = 'AIzaSyCl3devJEdk4J8236Gu1jP3IsJ2MFuIvfg';
const searchEID = '2031e8b19782f43e6';

//figure out in what format to pass in data and test if teh query actually works, also need || && separate properties one of the names might not match the search string
router.post('/', async (req, res) => {
    console.log('test input')
    console.log(req.body)

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
    console.log(plants.length)

//**********************LETS KEEP IT HERE FOR NOW */

    // plants[0]['URL'] = await fetch('https://www.googleapis.com/customsearch/v1?num=1&key='
    // + apiKey
    // + '&cx='
    // + searchEID
    // + '&q='
    // + plants[0].Common_Name.split(' ').join('%')
    // + '+plant')
    // .then(response => response.json())  
    // .then(response => {
    //     return response.items[0].pagemap.cse_thumbnail[0].src
    // });

    async function getPromise() {
        let getUrl =[];
        for (let i = 0; i < 2; i++) {
            getUrl[i] = await fetch('https://www.googleapis.com/customsearch/v1?num=1&key='
                + apiKey
                + '&cx='
                + searchEID
                + '&q='
                + plants[i].Common_Name.split(' ').join('%')
                + '+plant')
                .then(response => response.json())
                .then(response => {
                    return response.items[0].pagemap.cse_thumbnail[0].src
                });
        }
        return getUrl;

    }

    function addUrl(item, index, arr){
        for (var i = 0; i < 2; i++){
            arr[index] = item[i]
        };
    };

    getPromise().then(function (result) {
        console.log("TEST RESULT")
        console.log(result[1])
        plants.forEach((element, index) => {
            element.URL = result[index];
          });
        console.log(plants[0])
        res.render('profile-dashboard', { layout: 'main', plants });
    });
;

    // Pass serialized data into template
    //apparantly all fo the parameters go into the same object container as layout, took me hours to figure out.
  

});

module.exports = router;