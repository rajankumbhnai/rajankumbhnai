const express = require('express');
const router = express.Router();
const BlogController = require('../../controller/Hax04/BlogController');
const auth = require('../../middleware/auth');
router.route('/Hax04/api/v1/Blog/create').post(auth(...[ 'createByAdminInHax04Platform' ]),BlogController.addBlog);
router.route('/Hax04/api/v1/Blog/list').post(auth(...[ 'getAllByAdminInHax04Platform' ]),BlogController.findAllBlog);
router.route('/Hax04/api/v1/Blog/:id').get(auth(...[ 'getByAdminInHax04Platform' ]),BlogController.getBlog);
router.route('/Hax04/api/v1/Blog/count').post(auth(...[ 'getCountByAdminInHax04Platform' ]),BlogController.getBlogCount);
router.route('/Hax04/api/v1/Blog/aggregate').post(auth(...[ 'aggregateByAdminInHax04Platform' ]),BlogController.getBlogByAggregate);
router.route('/Hax04/api/v1/Blog/update/:id').put(auth(...[ 'updateByAdminInHax04Platform' ]),BlogController.updateBlog);    
router.route('/Hax04/api/v1/Blog/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInHax04Platform' ]),BlogController.partialUpdateBlog);
router.route('/Hax04/api/v1/Blog/softDelete/:id').put(auth(...[ 'softDeleteByAdminInHax04Platform' ]),BlogController.softDeleteBlog);
router.route('/Hax04/api/v1/Blog/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInHax04Platform' ]),BlogController.softDeleteManyBlog);
router.route('/Hax04/api/v1/Blog/addBulk').post(auth(...[ 'addBulkByAdminInHax04Platform' ]),BlogController.bulkInsertBlog);
router.route('/Hax04/api/v1/Blog/updateBulk').put(auth(...[ 'updateBulkByAdminInHax04Platform' ]),BlogController.bulkUpdateBlog);

module.exports = router;
