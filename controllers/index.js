const router = require('express').Router()
const communityRoutes = require('./communitiesRoutes')
const aboutRoutes = require('./aboutRoutes')
const contactRoutes = require('./contactRoutes')
const apiRoutes = require('./api')
const forumRoutes = require('./forumRoutes')
const homepageRoutes = require('./homepageRoutes')

router.use('/api', apiRoutes)
router.use('/communities', communityRoutes)
router.use('/about', aboutRoutes)
router.use('/contact', contactRoutes)
router.use('/forum', forumRoutes)
router.use('/home', homepageRoutes)

module.exports = router
