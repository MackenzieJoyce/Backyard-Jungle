const router = require('express').Router();
const { Post, User, Category } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/forum', async (req, res) => {
//     res.render('specific-forum', {layout: 'main'});
// });

router.get('/', async (req, res) => {
  console.log("FORUM ROUTES TEST!")
  try {
    // Get all comments and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['user_name']
        },
      ]
    })

    const categoryData = await Category.findAll()
  
    // Serialize data so the template can read it
    const post = postData.map((post) => post.get({ plain: true }))
    console.log(post);
    const categories = categoryData.map((category) => category.get({ plain: true }))
    console.log(categories);
    // Pass serialized data and session flag into template
    res.render('specific-forum', { layout: 'main', post, categories })
  } catch (err) {
    res.status(500).json(err)
  }
}) 

  // const categoryData = await Category.findAll().catch((err) => { 
  //   res.json(err);
  // });
  //   const categories = categoryData.map((category) => category.get({ plain: true }));
  //   res.render('specific-forum', { layout: 'main', categories });
  // });
  

// })
  

// router.get('/', async (req, res) => {



//  //or like this?
//   router.post('/', withAuth, async (req, res) => {
//     try {
//       const newPost = await Post.create({
//         ...req.body,
//         id: req.session.id,
//       });
  
//       res.status(200).json(newPost);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

  module.exports = router;