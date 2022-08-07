const router = require('express').Router();
const { Plants } = require('../models');

router.get('/', async (req, res) => {
    console.log('communities route TEST!');
    res.render('communities', {layout: 'main'});
})

module.exports = router;