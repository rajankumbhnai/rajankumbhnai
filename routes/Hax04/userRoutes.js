const express = require('express');
const router = express.Router();
const userController = require('../../controller/Hax04/userController');
const auth = require('../../middleware/auth');
router.route('/Hax04/api/v1/user/create').post(auth(...[ 'createByAdminInHax04Platform' ]),userController.addUser);
router.route('/Hax04/api/v1/user/list').post(auth(...[ 'getAllByAdminInHax04Platform' ]),userController.findAllUser);
router.route('/Hax04/api/v1/user/:id').get(auth(...[ 'getByAdminInHax04Platform' ]),userController.getUser);
router.route('/Hax04/api/v1/user/count').post(auth(...[ 'getCountByAdminInHax04Platform' ]),userController.getUserCount);
router.route('/Hax04/api/v1/user/aggregate').post(auth(...[ 'aggregateByAdminInHax04Platform' ]),userController.getUserByAggregate);
router.route('/Hax04/api/v1/user/update/:id').put(auth(...[ 'updateByAdminInHax04Platform' ]),userController.updateUser);    
router.route('/Hax04/api/v1/user/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInHax04Platform' ]),userController.partialUpdateUser);
router.route('/Hax04/api/v1/user/softDelete/:id').put(auth(...[ 'softDeleteByAdminInHax04Platform' ]),userController.softDeleteUser);
router.route('/Hax04/api/v1/user/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInHax04Platform' ]),userController.softDeleteManyUser);
router.route('/Hax04/api/v1/user/addBulk').post(auth(...[ 'addBulkByAdminInHax04Platform' ]),userController.bulkInsertUser);
router.route('/Hax04/api/v1/user/updateBulk').put(auth(...[ 'updateBulkByAdminInHax04Platform' ]),userController.bulkUpdateUser);
router.route('/Hax04/api/v1/user/change-password').put(auth(...[ 'changePasswordByAdminInHax04Platform' ]),userController.changePassword);
router.route('/Hax04/api/v1/user/update-profile').put(auth(...[ 'updateProfileByAdminInHax04Platform' ]),userController.updateProfile);

module.exports = router;
