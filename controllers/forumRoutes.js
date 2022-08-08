const router = require('express').Router();

router.get('/forum', async (req, res) => {
    res.render('specific-forum', {layout: 'main'});
})

module.exports = router;