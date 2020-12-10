const connection = require('../models');

const follow = async function(req, res){
    const data = req.body;
    await connection.Follower.create(data);
    res.json('registration successful');
}

const findAll = async function(req, res){
    const retrievedData = await connection.Follower.findAll();
    res.json(retrievedData);
}

const findOne = async function(req, res){
    const inputId = req.params.id;
    await connection.Follower.findAll({
        where:{
           id : inputId
        },
    });
    res.json(inputId)
}

const unfollow = async (req, res) => {
   const inputId = req.params.id;
   await connection.Follower.destroy({
       where:{
           id : inputId
        }
   });
   res.json('Unfollowed');
}

module.exports = {
  follow,
  findAll,
  unfollow,
  findOne
}