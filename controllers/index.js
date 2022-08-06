const router = require('express').Router()
const communityRoutes = require('./communitiesRoutes')
const apiRoutes = require('./api')
const forumRoutes = require('./forumRoutes')
const homepageRoutes = require('./homepageRoutes')

<<<<<<< HEAD
router.use('/api', apiRoutes);
router.use('/', homepageRoutes);
router.use('/', communityRoutes);
router.use('/', forumRoutes);

=======
router.use('/api', apiRoutes)
router.use('/', communityRoutes)
router.use('/', forumRoutes)
router.use('/', homepageRoutes)
>>>>>>> 7d6ded065e7cd02ff659661bf3961f421a5ffbfb

module.exports = router
