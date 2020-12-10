const db = require('../model');

const isAdmin = async (req,res,next) =>{
    const data = await db.author.findOne({
        where:{id : req.user.id} ,
        attribute:['aprove']
    });

    // console.log('isAdmin-----------------------------------',data);
    data.isAdmin ?
        next()
        : res.json({'msg':'you dont have the priviledge to access this endpoint'});

}

module.exports = isAdmin;