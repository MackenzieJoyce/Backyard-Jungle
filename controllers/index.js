const router = require('express').Router();
const communityRoutes = require('./communitiesRoutes');

router.use('/communities', communityRoutes);
router.use('/', communityRoutes);

module.exports = router;
