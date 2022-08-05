const router = require('express').Router();
const logFormRoutes = require('./loginFormRoute');
const userRoutes = require('./userRoutes')
const plantRoutes = require('./plantRoutes');

router.use('/logform', logFormRoutes);
router.use('/searchplant', plantRoutes);
router.use('/', userRoutes)





module.exports = router;