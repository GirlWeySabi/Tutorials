const db = require('../model/index');


const create = async (req, res) => {
    const data = req.body;

   await db.reaction.create(
        {
            react : data.react,
            userId : data.userId,
            topicId : req.params.topicId
        }
    );
    res.json(data);
    console.log(data);
}

const retrieve = async (req,res) => {
   const retrivedData = await db.reaction.findAll();
    console.log(retrivedData);
    res.json(retrivedData);
}

const findOne = async (req,res) => {
    let input = req.params.id;
    const retrievedData = await db.reaction.findAll({where: {
        id : input
    },
    include : [
        {model : db.topics},
        {model : db.UserModel}]
});
    res.json(retrievedData);
}

const update = async (req,res) => {

    const inputId = req.params.id;
    console.log(req.body);
    await db.reaction.update(req.body,{
        where: {
            id:inputId
          }
    });
    console.log('update succ');
    res.json('update succ');
}

const destroy = async (req,res) => {

     const inputId = req.params.id;
    await db.reaction.destroy({
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