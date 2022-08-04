const router = require('express').Router();
const categoryRoutes = require('./communities');

router.use('/communities', categoryRoutes);

module.exports = router;