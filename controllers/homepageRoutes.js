const router = require('express').Router();

router.get('/', async (req, res) => {
    console.log('TEST');
    res.render('login', {layout: 'home'});
})

module.exports = router;