const db = require('../model');

const create = async (req, res) => {
    const data = req.body;
    const authorId = req.params.authorId;
    const courseId = req.params.courseId
    await db.Topics.create(
        {
           topicsTitle : data.topicsTitle,
           authorId : authorId, 
           courseId : courseId
        }
    );
    res.json(data);
    console.log(data);
}


const retrieve = async (req,res) => {
    const retrievedData = await db.Topics.findAll({
        include : [
            {
                model : db.author,

            },
            {
               model : db.CourseModel

            }
        ] 
    });
     console.log(retrievedData);
     res.json(retrievedData)
}

const update = async (req,res) => {

    const inputId = req.params.id;
    console.log(req.body);
    await db.Topics.update(req.body,{
        where: {
            id:inputId
          }
    });
    console.log('update succ');
    res.json('update succ');
}

const destroy = async (req,res) => {

    const inputId = req.params.id;
   await db.Topics.destroy({
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
    destroy
}