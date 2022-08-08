const router = require('express').Router();
const { Plants } = require('../models');

router.get('/', async (req, res) => {
    console.log('about contact TEST!');
    res.render('contact', {layout: 'main'});
})

module.exports = router;