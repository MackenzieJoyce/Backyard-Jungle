const router = require('express').Router();
const { Plants } = require('../models');

// router.get('/communities', (req, res) => res.render('communities'));
router.get('/', async (req, res) => {
    console.log('TEST');
    res.render('test', {layout: 'main'});
})

module.exports = router;