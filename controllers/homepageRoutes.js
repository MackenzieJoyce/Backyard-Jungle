const router = require('express').Router();

router.get('/', async (req, res) => {
    console.log('TEST');
    res.render('login', {layout: 'main'});
})

module.exports = router;