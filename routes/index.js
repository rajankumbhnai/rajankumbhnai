const express = require('express');
const router =  express.Router();
router.use('/',require('./admin/index'));
router.use('/',require('./Hax04/index'));

module.exports = router;