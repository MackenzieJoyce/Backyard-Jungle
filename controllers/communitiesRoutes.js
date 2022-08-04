const router = require('express').Router();
const { Plants } = require('../models');

router.get('/communities', (req, res) => res.render('communities'));

module.exports = router;