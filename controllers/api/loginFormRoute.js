const router = require('express').Router();

router.post('/logform', async (req, res) => {
    try {
        res.render('test', {layout: 'home'});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;