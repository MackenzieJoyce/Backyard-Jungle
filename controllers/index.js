const router = require('express').Router();
const communityRoutes = require('./communities');

router.use('/communities', communityRoutes);

module.exports = router;
