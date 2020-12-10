const db = require('../model');
const bcrypt = require('bcrypt');

const updatePassword = async (req,res,next) =>{
    
    const inputPass = await db.forget.findOne({
        where : {email : req.user.email},
        attribute :['email']
    });
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(inputPass.password, salt);
    const password = hash;
  
    const data = await db.user.update(
        {password:password},
        {where:{email:req.user.email}
    });

    
    data ?
        next()
        :res.json({'msg':'failed to change password try again'})
    
}

module.exports = updatePassword;