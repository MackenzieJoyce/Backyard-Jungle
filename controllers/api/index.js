const router = require('express').Router();
const logFormRoutes = require('./loginFormRoute');

router.use('/logform', logFormRoutes);

module.exports = router;