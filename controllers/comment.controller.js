const db = require('../model');


const create = async (req, res) => {
    const data = req.body;

   await db.CommentModel.create(
        req.body  
    );
    res.json(data);
    console.log(data);
}


const retrieve = async (req,res) => {
   const retrivedData = await db.CommentModel.findAll( );
    res.json(retrivedData);
}
const findOne = async (req,res) => {
    let input = req.params.id;
    const retrievedData = await db.CommentModel.findAll({where: {
        id : input
    },
    include : [
        {model : db.Topics},
        {model : db.UserModel}]
});
    res.json(retrievedData);
}

const update = async (req,res) => {

    const inputId = req.params.id;
    console.log(inputId);
    await db.CommentModel.update(req.body,{
        where: {
            id:inputId
          }
    });
    console.log('update succ');
    res.json('update succ');
}

const destroy = async (req,res) => {

     const inputId = req.params.id;
    await db.CommentModel.destroy({
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