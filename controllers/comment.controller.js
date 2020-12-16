const db = require('../model');


const create = async (req, res) => {
    const data = req.body;

   await db.comment.create(
       {

           comment : data.comment,
           userId : req.user.id,
           topicId : req.params.topicId
        }
    );
    res.json({'msg':'commented'});
}


const retrieve = async (req,res) => {
   const retrivedData = await db.comment.findAll( {
    include : [{
        model:db.topics,
        include:[{
            model:db.courses,
  
            include:{model:db.author}
        },
        {model:db.reaction}
    ]
    }]
   });
    res.json(retrivedData);
}
const findOne = async (req,res) => {
    let input = req.user.id;
    const retrievedData = await db.comment.findOne({where: {
        id : input
    },
    include : [{
        model:db.topics,
        include:[{
            model:db.courses,
  
            include:{model:db.author}
        },
        {model:db.reaction}
    ]
    }]
});
    res.json(retrievedData);
}

const update = async (req,res) => {

    const inputId = req.user.id;
    console.log(inputId);
    await db.comment.update(req.body,{
        where: {
            id:inputId
          }
    });
    console.log('update succ');
    res.json('update succ');
}

const destroy = async (req,res) => {

     const inputId = req.user.id;
    await db.comment.destroy({
        where : {
            id : inputId
        }
    })

    console.log('deleted succ');
    res.json('deleted succ');
}

module.exports = {
    create,
    retrieve,
    update,
    destroy,
    findOne
}