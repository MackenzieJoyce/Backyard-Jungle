const router = require('express').Router()
const logFormRoutes = require('./loginFormRoute')
const userRoutes = require('./userRoutes')
const plantRoutes = require('./plantRoutes')
const profileRoutes = require('./profileRoutes')

router.use('/logform', logFormRoutes)
router.use('/searchplant', plantRoutes)
router.use('/userroutes', userRoutes)
router.use('/profileRoutes', profileRoutes)

module.exports = router
