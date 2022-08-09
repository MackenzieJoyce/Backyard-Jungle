const router = require('express').Router();
const { Post, User, Category } = require('../models');
const withAuth = require('../utils/auth');


router.post('/', async (req, res) => {
  console.log("FORUM POST ROUTES TEST!")
  // console.log (req.body)
  console.log(req.session.user_i);
  try {
    const newPost = await Post.create({
      title: req.body.title,
      body: req.body.body,
      type: req.body.type,
      user_id: req.session.user_id
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// router.get('/forum', async (req, res) => {
//     res.render('specific-forum', {layout: 'main'});
// });

router.get('/:id', async (req, res) => {

    try {
      const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['user_name']
          }
        ]
      })
      const categoryData = await Category.findAll()
      const categories = categoryData.map((post) => post.get({ plain: true }))
      const post = postData.map((post) => post.get({ plain: true }))
      res.render('specific-forum', { layout: 'main' , post, categories })
    } catch (err) {
      res.status(500).json(err)
    }
  });

//  //or like this?
 
  module.exports = router;