const Test1 = (req,res,next)=>{
  try {
    next();        
  } catch (error) {
    throw error;
  }
};

module.exports = Test1;
