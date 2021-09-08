const dbService = require('./dbService');
/*
 * convertObjectToEnum : convert object to enum
 * @param obj          : {}
 */
const convertObjectToEnum = (obj) => {
  const enumArr = [];
  Object.values(obj).map((val) => enumArr.push(val));
  return enumArr;
};

/*
 * randomNumber : generate random numbers.
 * @param length          : number *default 4
 */
const randomNumber = (length = 4) => {
  const numbers = '12345678901234567890';
  let result = '';
  for (let i = length; i > 0; i -= 1) {
    result += numbers[Math.round(Math.random() * (numbers.length - 1))];
  }
  return result;
};

/*
 * replaceAll: find and replace al; occurrence of a string in a searched string
 * @param string : string to be replace
 * @param search : string which you want to replace
 * @param replace: string with which you want to replace a string
 */
const replaceAll = (string, search, replace) => string.split(search).join(replace);

/*
 * uniqueValidation: validate Login With Fields while Registration
 * @param Model : Mongoose Model, on which query runs
 * @param data : data , coming from request
 */
const uniqueValidation = async (Model,data) =>{
  let filter = {};
  if (data && data['email']){
    filter = { 'email': data['email'] };
  }
  let found = await dbService.getDocumentByQuery(Model,filter);
  if (found){
    return false;
  }
  return true;
};

module.exports = {
  convertObjectToEnum,
  randomNumber,
  replaceAll,
  uniqueValidation,
};
