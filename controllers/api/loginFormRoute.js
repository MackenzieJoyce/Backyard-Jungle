const router = require('express').Router();

router.post('/', async (req, res) => {
    //this doesn't do anything at the moment (Ana)
    try {
        res.render('specific-forum', {layout: 'main'});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;