const router = require('express').Router();

router.get('/communities', (req, res) => res.render('communities'));

module.exports = router;