const router = require('express').Router()
const userRoutes = require('./userRoutes')
const plantRoutes = require('./plantRoutes')
const profileRoutes = require('./profileRoutes')


router.use('/searchplant', plantRoutes)
router.use('/user', userRoutes)
router.use('/profile', profileRoutes)


module.exports = router