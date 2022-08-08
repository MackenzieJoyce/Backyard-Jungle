const router = require('express').Router();
const { Plants } = require('../models');

router.get('/', async (req, res) => {
    console.log('about route TEST!');
    res.render('about', {layout: 'main'});
})

module.exports = router;