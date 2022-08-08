const router = require('express').Router();
const { Post, User } = require('../models');

router.get('/forum', async (req, res) => {
    res.render('specific-forum', {layout: 'main'});
});

router.get('/', (req, res) => {
    Post.findAll({
      include:[User],
    })
    .then((posts) => res.json(posts))
    .catch((err) => res.status(500).json(err))
   //find posts???
  });


router.post('/', (req, res) => {
    // create a new post
    Post.create(req.body)
    .then((posts) => res.status(200).json(posts))
    .catch((err) => res.status(400).json(err))
  });

module.exports = router;