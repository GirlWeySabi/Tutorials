const db = require('../model/index');

const create = async (req, res) => {
    // const data = req.body;

   const data = await db.courses.create(
        req.body
    );
    res.json(data);
    // console.log(data);
}


const retrieve = async (req, res) => {
    const retrievedData= await db.courses.findAll(
        {include : db.topics}
    );
    console.log(retrievedData);
    res.json(retrievedData);
}

const findOne = async (req, res) => {
    const retrievedData= await db.courses.findOne(
        {include : db.topics}
    );
    console.log(retrievedData);
    res.json(retrievedData);
}

const update = async (req, res) => {
    const inputId = req.user.id;
    console.log(req.body)
    await db.courses.update(req.body , {
        where: {
            id: inputId
        }
    });
    console.log('update successful');
    res.json('update successful')

}

const destroy = async (req, res) => {
    const inputId = req.user.id;  //Is it possible to do "req.params.courseTitle" instead of using id in this case (YES, JUST use courseTitle in the route, instead of "id")
    await db.courses.destroy({
        where : {
            id : inputId

    }
})


console.log('course deleted successfully');
res.json('course deleted successfully');

}

module.exports = {
    create,
    retrieve,
    update,
    destroy,
    findOne
}