/*
 * modelValidation.js
 * purpose     : request validation
 * description : validate each post and put request as per mongoose model
 *
 */
const joi = require('joi');
const { USER_ROLE } = require('../../constants/authConstant');
const { convertObjectToEnum } = require('../common');   
exports.schemaKeys = joi.object({
  firstName: joi.string(),
  lastName: joi.string(),
  name: joi.string(),
  username: joi.string(),
  password: joi.string(),
  email: joi.string(),
  isActive: joi.boolean(),
  addedby: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  role: joi.number().integer().valid(...convertObjectToEnum(USER_ROLE)),
  resetPasswordLink: joi.object({
    code:joi.string(),
    expireTime:joi.date()
  }),
  isDeleted: joi.boolean()
}).unknown(true);
exports.updateSchemaKeys = joi.object({
  firstName: joi.string(),
  lastName: joi.string(),
  name: joi.string(),
  username: joi.string(),
  password: joi.string(),
  email: joi.string(),
  isActive: joi.boolean(),
  addedby: joi.string().regex(/^[0-9a-fA-F]{24}$/),
  role: joi.number().integer().valid(...convertObjectToEnum(USER_ROLE)),
  resetPasswordLink: joi.object({
    code:joi.string(),
    expireTime:joi.date()
  }),
  isDeleted: joi.boolean()
}).unknown(true);
