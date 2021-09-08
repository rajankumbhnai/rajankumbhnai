let User = require('../model/user');
let Blog = require('../model/Blog');
let dbService = require('../utils/dbService');

const deleteUser = async (filter) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const userFilter0787 = { 'addedby': { '$in': user } };
      const user5028 = await deleteUser(userFilter0787);
      const userFilter5663 = { 'updatedBy': { '$in': user } };
      const user0753 = await deleteUser(userFilter5663);
      const userFilter6521 = { 'addedBy': { '$in': user } };
      const user8126 = await deleteUser(userFilter6521);
      const BlogFilter6335 = { 'addedby': { '$in': user } };
      const Blog8009 = await deleteBlog(BlogFilter6335);
      const BlogFilter9205 = { 'updatedBy': { '$in': user } };
      const Blog4187 = await deleteBlog(BlogFilter9205);
      const BlogFilter7306 = { 'addedBy': { '$in': user } };
      const Blog4724 = await deleteBlog(BlogFilter7306);
      return await User.deleteMany(filter);
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteBlog = async (filter) =>{
  try {
    return await Blog.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const countUser = async (filter) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const userFilter6440 = { 'addedby': { '$in': user } };
      const user3751Cnt = await countUser(userFilter6440);
      const userFilter9541 = { 'updatedBy': { '$in': user } };
      const user0759Cnt = await countUser(userFilter9541);
      const userFilter7858 = { 'addedBy': { '$in': user } };
      const user6378Cnt = await countUser(userFilter7858);
      const BlogFilter6006 = { 'addedby': { '$in': user } };
      const Blog5861Cnt = await countBlog(BlogFilter6006);
      const BlogFilter5408 = { 'updatedBy': { '$in': user } };
      const Blog9871Cnt = await countBlog(BlogFilter5408);
      const BlogFilter2774 = { 'addedBy': { '$in': user } };
      const Blog3176Cnt = await countBlog(BlogFilter2774);
      const userCnt =  await User.countDocuments(filter);
      let response = { user : userCnt  };
      response = {
        ...response,
        ...user3751Cnt,
        ...user0759Cnt,
        ...user6378Cnt,
        ...Blog5861Cnt,
        ...Blog9871Cnt,
        ...Blog3176Cnt,
      };
      return response;
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countBlog = async (filter) =>{
  try {
    const BlogCnt =  await Blog.countDocuments(filter);
    return { Blog : BlogCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUser = async (filter) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const userFilter1609 = { 'addedby': { '$in': user } };
      const user8309 = await softDeleteUser(userFilter1609);
      const userFilter2102 = { 'updatedBy': { '$in': user } };
      const user8482 = await softDeleteUser(userFilter2102);
      const userFilter2329 = { 'addedBy': { '$in': user } };
      const user1750 = await softDeleteUser(userFilter2329);
      const BlogFilter3943 = { 'addedby': { '$in': user } };
      const Blog3996 = await softDeleteBlog(BlogFilter3943);
      const BlogFilter6349 = { 'updatedBy': { '$in': user } };
      const Blog6951 = await softDeleteBlog(BlogFilter6349);
      const BlogFilter9065 = { 'addedBy': { '$in': user } };
      const Blog7254 = await softDeleteBlog(BlogFilter9065);
      return await User.updateMany(filter, { isDeleted:true });
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteBlog = async (filter) =>{
  try {
    return await Blog.updateMany(filter, { isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

module.exports = {
  deleteUser,
  deleteBlog,
  countUser,
  countBlog,
  softDeleteUser,
  softDeleteBlog,
};
