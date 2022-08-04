const router = require('express').Router();
const communityRoutes = require('./communitiesRoutes');

router.use('/communities', communityRoutes);

module.exports = router;
