const router = require('express').Router();
const { Post, User, Category } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/forum', async (req, res) => {
//     res.render('specific-forum', {layout: 'main'});
// });

router.get('/', async (req, res) => {

    try {
      const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['user_name']
          }
        ]
      })
  
      const post = postData.map((post) => post.get({ plain: true }))
      console.log(post);
      res.render('specific-forum', { layout: 'main' , post })
    } catch (err) {
      res.status(500).json(err)
    }
  });

//  //or like this?
  router.post('/', async (req, res) => {
    console.log("FORUM POST ROUTES TEST!")
    console.log (req.body)

    try {
      const newPost = await Post.create({
        title: req.body.title,
        body: req.body.body,
        type: req.body.type
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;