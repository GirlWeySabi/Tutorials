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

    const inputId = req.user.authorId;
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

    const inputId = req.user.authorId;
   await db.topics.destroy({
       where : {
           id : inputId
       }
   })

   res.json('deleted successfully');
}
const upload = async(req,res)=>{
            
   const file = req.files;
   let data;

   !file ?
        res.json({'msg': 'please you need to select a file'})
        :
            !file.image ?
                ''
                :
                    file.image.forEach(async (image) => {
                        console.log(image.originalname)
                    data = await db.image.create(
                            {
                                image:image.path,
                                topicId:req.params.topicId
                            }
                            
                            );
                        res.json({"msg":"uploaded","file":req.files});
                    });

            !file.video ?
                ''
                :        

                file.video.forEach(async (video) => {
                    console.log(video.originalname)
                data = await db.video.create(
                        {
                            video:video.path,
                            topicId:req.params.topicId
                        }
                        
                        );
                    res.json({"msg":"uploaded","file":req.files});
                });
    }
    

module.exports = {
    create,
    retrieve,
    update,
    destroy,
    upload
}