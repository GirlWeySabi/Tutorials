const db = require('../model');
const logout = async (req,res, next)=>{
    console.log(req.user.id);
    const data = await db.logout.findOne({where:{userId:req.user.id}});
    data ? res.json('Unauthorized') : next()
}

module.exports = logout;