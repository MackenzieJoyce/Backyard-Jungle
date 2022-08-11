const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth')

//I was trying to figure out where we send post data to server, 
//and turned out this code below doesn't do anything. Commenting out. ANA

//   // router.post('/', async (req, res) => {
//     router.post('/', withAuth, async (req, res) => {
//       console.log("==========================")
//     console.log(req.body)
//   try {
//     const newPost = await Post.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newPost);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });
// router.put('/:id', withAuth, async (req, res) => {
router.put('/:id',  async (req, res) => {
  try {
    const postData = await Post.update({ 
      title: req.body.title ,
      content: req.body.content ,
    },
    {
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    })

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;