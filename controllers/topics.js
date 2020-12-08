const db = require('../model');
const multer = require('multer');
const multipleUpload =require('../middleware/multiple.upload')


const create = async (req, res) => {
    const data = req.body;
    const authorId = req.user.authorId;
    const courseId = req.params.courseId
   const result = await db.topics.create(
        {
           topicsTitle : data.topicsTitle,
           file: data.file,
           content: data.content,
           authorId : authorId, 
           courseId : courseId
        }
    );
    res.json(result);
    console.log(data);
}


const retrieve = async (req,res) => {
    const retrievedData = await db.topics.findAll({
        include : [
            {
                model : db.author,

            },
            {
               model : db.courses

            }
        ] 
    });
     console.log(retrievedData);
     res.json(retrievedData)
}

const update = async (req,res) => {

    const inputId = req.params.id;
    console.log(req.body);
    await db.topics.update(req.body,{
        where: {
            id:inputId
          }
    });
    console.log('update succ');
    res.json('update succ');
}

const destroy = async (req,res) => {

    const inputId = req.params.id;
   await db.topics.destroy({
       where : {
           id : inputId
       }
   })

   res.json('deleted successfully');
}
async function upload(req, res){
    multerConfig.filesUpload(req, res, async function(err){
        if (err instanceof multer.MulterError){
            return res.json(err.message);
        }
        else if (err) {
            return res.json(err);
        }
        else if(!req.files){
            return res.json({"image": req.file, "msg": "please select files to upload"});
        }
        if(req.files){
    
            await connection.topics.update({files:req.file.path},{where:{id:req.user.id}});
    
            return res.json({"msg":"uploaded","file":req.file});
        }
    });
    }
    

module.exports = {
    create,
    retrieve,
    update,
    destroy,
    upload
}