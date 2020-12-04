const db = require('../model');


const create = async (req, res) => {
    const data = req.body;

   await db.comment.create(
       {

           comment : data.comment,
           userId : data.userId,
           topicId : req.params.topicId
        }
    );
    res.json(data);
}


const retrieve = async (req,res) => {
   const retrivedData = await db.comment.findAll( );
    res.json(retrivedData);
}
const findOne = async (req,res) => {
    let input = req.user.id;
    const retrievedData = await db.comment.findAll({where: {
        id : input
    },
    include : [
        {model : db.topics},
        {model : db.user}]
});
    res.json(retrievedData);
}

const update = async (req,res) => {

    const inputId = req.params.id;
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

     const inputId = req.params.id;
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