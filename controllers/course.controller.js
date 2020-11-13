const db = require('../model/index');

const create = async (req, res) => {
    
    const data = req.body;
    const authorId = req.params.authorId;
    const courseTitle = data.courseTitle.toUpperCase();

    const check = await db.CourseModel.findOne({
        where : {
            courseTitle : courseTitle,
            authorId : authorId
        }
    });


    // checking if the instance of the course exits
    if (check){
        return;
    }

    await db.CourseModel.create(
        {
            courseTitle : courseTitle,
            authorId : authorId 
        }
    );
    res.json(data);
    console.log(data);
}


const retrieve = async (req, res) => {
    const retrievedData= await db.CourseModel.findAll(
        {include : db.Topics}
    );
    console.log(retrievedData);
    res.json(retrievedData);
}

const update = async (req, res) => {
    const inputId = req.params.id;
    console.log(req.body)
    await db.CourseModel.update(req.body , {
        where: {
            id: inputId
        }
    });
    console.log('update successful');
    res.json('update successful')

}

const destroy = async (req, res) => {
    const inputId = req.params.id;  //Is it possible to do "req.params.courseTitle" instead of using id in this case (YES, JUST use courseTitle in the route, instead of "id")
    await db.CourseModel.destroy({
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
    destroy
}