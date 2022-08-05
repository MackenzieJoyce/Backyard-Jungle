const router = require('express').Router();
const { Plants } = require('../models');

router.get('/communities', async (req, res) => {
    res.render('communities', {layout: ''});
})

module.exports = router;