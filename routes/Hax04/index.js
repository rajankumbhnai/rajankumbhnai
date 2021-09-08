const express =  require('express');
const router =  express.Router();
router.use('/Hax04/auth',require('./auth'));
router.use(require('./userRoutes'));
router.use(require('./BlogRoutes'));

module.exports = router;
