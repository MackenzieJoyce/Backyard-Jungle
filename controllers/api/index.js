const router = require('express').Router();
const logFormRoutes = require('./loginFormRoute');
const userRoutes = require('./userRoutes')

router.use('/logform', logFormRoutes);
router.use('/', userRoutes)

module.exports = router;