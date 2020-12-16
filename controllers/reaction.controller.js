const db = require('../model/index');


const create = async (req, res) => {
    const data = req.body;

   await db.reaction.create(
        {
            react : data.react,
            userId : req.user.id,
            topicId : req.params.topicId
        }
    );
    res.json(data);
    console.log(data);
}

const retrieve = async (req,res) => {
    let input = req.user.id;

   const retrivedData = await db.reaction.findAll({where: {
    id : input,
    react : '1'
},
include : [{
    model:db.topics,
    where:{aprove:1},
    include:{
        model:db.courses,
        where:{aprove:1}
    },
    include:{model:db.author},

}]
});
    console.log(retrivedData);
    res.json(retrivedData);
}

const findOne = async (req,res) => {
    let input = req.user.id;
    const retrievedData = await db.reaction.findOne({where: {
        id : input,
        react : '1',
        topicId : req.params.topicId
    },
    include : [{
        model:db.topics,
        where:{aprove:1},

        include:{
            model:db.courses,
            where:{aprove:1}

        },
        include:{model:db.author},

    }]
});
    res.json(retrievedData);
}

const update = async (req,res) => {

    const inputId = req.user.id;
    console.log(req.body);
    await db.reaction.update(req.body,{
        where: {
            id:inputId,
            topicId:req.params.topicId
          }
    });
    
    res.json({'msg':'update successful'});
}

const destroy = async (req,res) => {

     const inputId = req.user.id;
    await db.reaction.destroy({
        where : {
            id : inputId,
            topicId:req.params.topicId

        }
    })
   
    res.json({'msg':'deleted reaction successful'});

}

module.exports = {
    create,
    retrieve,
    update,
    destroy,
    findOne
}