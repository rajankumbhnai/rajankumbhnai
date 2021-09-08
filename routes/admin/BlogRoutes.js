const express = require('express');
const router = express.Router();
const BlogController = require('../../controller/admin/BlogController');
const auth = require('../../middleware/auth');
router.route('/admin/Blog/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),BlogController.addBlog);
router.route('/admin/Blog/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),BlogController.findAllBlog);
router.route('/admin/Blog/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),BlogController.getBlog);
router.route('/admin/Blog/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),BlogController.getBlogCount);
router.route('/admin/Blog/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),BlogController.getBlogByAggregate);
router.route('/admin/Blog/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),BlogController.updateBlog);    
router.route('/admin/Blog/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),BlogController.partialUpdateBlog);
router.route('/admin/Blog/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),BlogController.softDeleteBlog);
router.route('/admin/Blog/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),BlogController.softDeleteManyBlog);
router.route('/admin/Blog/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),BlogController.bulkInsertBlog);
router.route('/admin/Blog/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),BlogController.bulkUpdateBlog);

module.exports = router;
