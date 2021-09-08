
const User = require('../model/user');
async function seedUser () {
  try {
    let admin = await User.findOne({
      'email':'Sandy.Weimann63@gmail.com',
      'isActive':true,
      'isDeleted':false
    });
    if (!admin || !admin.isPasswordMatch('twjpahUayMeSJ4o') ) {
      let admin = new User({
        'password':'twjpahUayMeSJ4o',
        'email':'Sandy.Weimann63@gmail.com',
        'role':1
      });
      await User.create(admin);
    }
    let hax04 = await User.findOne({
      'email':'Mayra.McKenzie@hotmail.com',
      'isActive':true,
      'isDeleted':false
    });
    if (!hax04 || !hax04.isPasswordMatch('xBdEUyTWWNR4_Pp') ) {
      let hax04 = new User({
        'password':'xBdEUyTWWNR4_Pp',
        'email':'Mayra.McKenzie@hotmail.com'
      });
      await User.create(hax04);
    }
    console.info('Users seeded 🍺');
  } catch (error){
    console.log('User seeder failed.');
  }
}
function seedData (){
  seedUser();    
}   

module.exports = seedData;