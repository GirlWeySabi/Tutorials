const db = require('../model');

const dropUser = async (req,res,next)=>{
    const email = req.body.email;
    console.log('clear logout-----------------------------------------------------------------------------');
    console.log('clear logout', email);
    const data = await db.logout.findOne({where:{email:email}});
    if(!data) return next();
    db.logout.destroy({where:{email:email}});
    return next();
}

module.exports = dropUser;