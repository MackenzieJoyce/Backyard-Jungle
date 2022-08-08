const router = require('express').Router()
const communityRoutes = require('./communitiesRoutes')
const apiRoutes = require('./api')
const forumRoutes = require('./forumRoutes')
const homepageRoutes = require('./homepageRoutes')

router.use('/api', apiRoutes)
router.use('/communities', communityRoutes)
router.use('/forum', forumRoutes)
router.use('/', homepageRoutes)

module.exports = router
