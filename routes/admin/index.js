const express =  require('express');
const router =  express.Router();
router.use('/admin/auth',require('./auth'));
router.use(require('./userRoutes'));
router.use(require('./BlogRoutes'));

module.exports = router;
