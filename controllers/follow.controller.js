const db = require('../model');

const follow = async (req,res) =>{
    const data = await db.follow.create({
        userId : req.user.id,
        authorId : req.params.id
    });

    data ?
        res.json({'msg':'you followed'})
        :res.json({'msg':'un-able to followe try again'});
}

const whoYouFollow = async (req,res) => {
    const data = await db.follow.findAll({
        where:{userId:req.user.id},
        include : {model:db.author}
        
    });

    data ?
        data.length == 0 ?
            res.json({'msg':'you have not yet follow any one'})
            :res.json(data)
      
        :res.json({'msg':'fail to fecth'});
}

const unFollow = async (req,res) => {
    const data = await db.follow.destroy({where:{authorId:req.params.id}});

    data ?
        res.json({'msg':'un follow successfull'})
        :res.json({'msg':'fail to un follow'});
}

const seeMyFollowers = async (req,res) => {
    const data = await db.follow.findAll({
        where:{authorId:req.user.id},
        include : {model:db.user}
        
    });

    data ?
        data.length == 0 ?
            res.json({'msg':'you dont have any follower yet'})
            :res.json(data)
      
        :res.json({'msg':'fail to fecth'});
}    

module.exports = {
    follow,
    whoYouFollow,
    unFollow,
    seeMyFollowers
}