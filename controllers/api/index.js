const router = require('express').Router();
const logFormRoutes = require('./loginFormRoute');
const plantRoutes = require('./plantRoutes');

router.use('/logform', logFormRoutes);
router.use('/searchplant', plantRoutes);

module.exports = router;