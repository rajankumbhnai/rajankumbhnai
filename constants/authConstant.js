/*
 * constants
 */

const JWT = {
  ADMIN_SECRET:'myjwtadminsecret',
  HAX04_SECRET:'myjwthax04secret',
  EXPIRES_IN: 10000
};

const USER_ROLE = {
    
  Admin :1,
  Hax04:2,
};

const PLATFORM = {
  ADMIN:1,
  HAX04:2,
};

let LOGIN_ACCESS = { [USER_ROLE.Admin]:[PLATFORM.ADMIN,PLATFORM.HAX04], };

const DEFAULT_ROLE = 1;

const ROLE_RIGHTS = {
    
  [USER_ROLE.Admin] : [
    'getAllByAdminInAdminPlatform',
    'getByAdminInAdminPlatform',
    'aggregateByAdminInAdminPlatform',
    'getCountByAdminInAdminPlatform',
    'createByAdminInAdminPlatform',
    'addBulkByAdminInAdminPlatform',
    'updateByAdminInAdminPlatform',
    'updateBulkByAdminInAdminPlatform',
    'partialUpdateByAdminInAdminPlatform',
    'deleteByAdminInAdminPlatform',
    'softDeleteByAdminInAdminPlatform',
    'upsertByAdminInAdminPlatform',
    'fileUploadByAdminInAdminPlatform',
    'logoutByAdminInAdminPlatform',
    'softDeleteManyByAdminInAdminPlatform',
    'deleteManyByAdminInAdminPlatform',
    'changePasswordByAdminInAdminPlatform',
    'updateProfileByAdminInAdminPlatform',
    'getAllByAdminInHax04Platform',
    'getByAdminInHax04Platform',
    'aggregateByAdminInHax04Platform',
    'getCountByAdminInHax04Platform',
    'createByAdminInHax04Platform',
    'addBulkByAdminInHax04Platform',
    'updateByAdminInHax04Platform',
    'updateBulkByAdminInHax04Platform',
    'partialUpdateByAdminInHax04Platform',
    'deleteByAdminInHax04Platform',
    'softDeleteByAdminInHax04Platform',
    'upsertByAdminInHax04Platform',
    'fileUploadByAdminInHax04Platform',
    'logoutByAdminInHax04Platform',
    'softDeleteManyByAdminInHax04Platform',
    'deleteManyByAdminInHax04Platform',
    'changePasswordByAdminInHax04Platform',
    'updateProfileByAdminInHax04Platform'
  ],
    
};
const MAX_LOGIN_RETRY_LIMIT = 3;
const LOGIN_REACTIVE_TIME = 20;   

const FORGOT_PASSWORD_WITH = {
  LINK: {
    email: true,
    sms: false
  },
  EXPIRETIME: 20
};

module.exports = {
  JWT,
  USER_ROLE,
  DEFAULT_ROLE,
  ROLE_RIGHTS,
  PLATFORM,
  MAX_LOGIN_RETRY_LIMIT,
  LOGIN_REACTIVE_TIME,
  FORGOT_PASSWORD_WITH,
  LOGIN_ACCESS,
        
};