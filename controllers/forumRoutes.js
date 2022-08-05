const router = require('express').Router();

router.get('/forum', async (req, res) => {
    res.render('forum', {layout: ''});
})

module.exports = router;