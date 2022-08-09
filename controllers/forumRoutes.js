const router = require('express').Router();
const { Post, User, Category } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', async (req, res) => {
  try {
    const dbCategoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          attributes: [
            'title',
            'body'
          ],
        },
      ],
    });

    const category = dbCategoryData.get({ plain: true });
    res.render('specific-forum', {layout: 'main', category});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
    console.log("FORUM ROUTES TEST!")
    try {
      // Get all comments and JOIN with user data
      const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['user_name']
          }
        ]
      })
  
      // Serialize data so the template can read it
      const post = postData.map((post) => post.get({ plain: true }))
      console.log(post);
      // Pass serialized data and session flag into template
      res.render('specific-forum', { layout: 'main' , post })
    } catch (err) {
      res.status(500).json(err)
    }
  
  
  
  })

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