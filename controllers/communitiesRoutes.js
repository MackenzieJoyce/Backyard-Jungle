const router = require('express').Router();
const { Plants } = require('../models');

router.get('/communitiesRoutes', (req, res) => res.render('communities'));

module.exports = router;