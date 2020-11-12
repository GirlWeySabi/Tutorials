const db = require('../model/index');

const create = async (req, res) => {
    const data = req.body;

    await db.UserModel.create(
        data
    );
    res.json(data);
    console.log(data);
}

const retrieve = async (req, res) => {
    const retrievedData = await db.UserModel.findAll();
    console.log(retrievedData);
    res.json(retrievedData);
} 


const findOne = async (req,res) => {
    let input = req.params.id;
    const retrievedData = await db.UserModel.findAll({where: {
        id : input
    },

    include : db.CommentModel

});
    
    res.json(retrievedData);
}


const update = async (req, res) => {
    const inputId = req.params.id;
    console.log(req.body)
    await db.UserModel.update(req.body , {
        where: {
            id: inputId
        }
    });
    console.log('update successful');
    res.json('update successful')

}

const destroy = async (req, res) => {
    const inputId = req.params.id;
    await db.UserModel.destroy({
        where : {
            id : inputId

    }
})


console.log('deleted successfully');
res.json('deleted successfully');

}

// WHAT IF I WANT TO DELETE AND THEN I WANT IT TO SHOW ME THE REMAINING DATA AS A RESPONSE (IN ADDITION TO "success message") ANSWER: you can use findAll function for that!

module.exports = {
    create,
    retrieve,
    findOne,
    update,
    destroy
}