const router = require('express').Router()
const { Comment, User, Post, Collection, Plants } = require('../../models')
const withAuth = require('../../utils/auth')


///THIS IS GETTING THE POSTS
router.get('/', withAuth, async (req, res) => {
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

    // Pass serialized data and session flag into template
    res.render('profile-dashboard', { layout: 'main', post })
  } catch (err) {
    res.status(500).json(err)
  }



})

router.get('/', async (req, res,) => {
  try {
    // Get all comments and JOIN with user data
    const collectionData = await Collection.findAll({
      // include: [
      //   {
      //     model: User,
      //     attributes: ['user_name']
      //   },
      //   {
      //     model: Plants,
      //     attributes: ['id']
      //   },
      // ]
    })

    // Serialize data so the template can read it
    const collection = collectionData.map((post) => post.get({ plain: true }))
    // console.log(post);
    // console.log(post[0].user.user_name);
    // console.log(post.user.user_name);
    console.log(collection);
    // Pass serialized data and session flag into template
    res.render('profile-dashboard', { layout: 'main' , collection })
  } catch (err) {
    res.status(500).json(err)
  }


})

router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['user_name']
        }
      ]
    })

    const post = postData.get({ plain: true })

    res.render('post', {
      ...post,
      logged_in: req.session.logged_in
    })
  } catch (err) {
    res.status(500).json(err)
  }
})



/////THIS IS GETTING THE COMMENTS


// router.get('/', async (req, res) => {
//   try {
//     // Get all comments and JOIN with user data
//     const commentData = await Comment.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['user_name']
//         }
//       ]
//     })


//     // Serialize data so the template can read it
//     const comment = commentData.map((comment) => comment.get({ plain: true }))

//     // Pass serialized data and session flag into template
//     res.render('profile-dashboard', { layout: 'main' })
//   } catch (err) {
//     res.status(500).json(err)
//   }
// })

router.get('/comment/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['user_name']
        }
      ]
    })

    const comment = commentData.get({ plain: true })

    res.render('comment', {
      ...comment,
      logged_in: req.session.logged_in
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

//THIS IS GETTING THE COLLECTION INFO

router.get('/collection', withAuth, async (req, res) => {
  try {
    // Get all collections and JOIN with user data
    const collectionData = await Collection.findAll({
      include: [
        {
          model: Collection,
          attributes: ['user_name']
        }
      ]
    })

    // Serialize data so the template can read it
    const collection = collectionData.map((collection) =>
      collection.get({ plain: true })
    )

    // Pass serialized data and session flag into template
    res.render('account-dashbaord', {
      collection,
      logged_in: req.session.logged_in
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/collection/:id', withAuth, async (req, res) => {
  try {
    const collectionData = await Collection.findByPk(req.params.id, {
      include: [
        {
          model: Collection,
          attributes: ['PLACEHOLDER']
        }
      ]
    })

    const collection = collectionData.get({ plain: true })

    res.render('collection', {
      ...collection,
      logged_in: req.session.logged_in
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

// Use withAuth middleware to prevent access to route
router.get('/', withAuth, withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Comment }, { model: Collection }]
    })

    const user = userData.get({ plain: true })

    res.render('profile', {
      ...user,
      logged_in: true
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile')
    return
  }

  res.render('login')
})

router.get('/:id', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id)
    if (!userData) {
      res.status(404).json({ message: 'No user with this username!' })
      return
    }
    const user = userData.get({ plain: true })
    res.json(user)
  } catch (err) {
    res.status(500).json(err)
  }
})
module.exports = router