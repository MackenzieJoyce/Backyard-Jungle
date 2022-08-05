const router = require('express').Router();
const communityRoutes = require('./communitiesRoutes');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/communities', communityRoutes);
router.use('/', communityRoutes);

module.exports = router;
