const db = require('../model/index');
const singleUpload = require('../middleware/profilePic');
const multer = require('multer');

const create = async (req, res) => {
    // const data = req.body;

   const data = await db.courses.create(
        {
            courseTitle : req.body.courseTitle,
            authorId : req.user.id
        }
    );
    res.json(data);
    
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

const profilePicture = (req,res)=>{
    singleUpload(req, res, async function(err){
        if (err instanceof multer.MulterError){
            return res.json(err.message);
        }
        else if (err) {
            return res.json(err);
        }
        else if(!req.file){
            return res.json({"image": req.file, "msg": "please select an image to upload"});
        }
        if(req.file){
    
            await db.courses.update({photo:req.file.path},{where:{id:req.params.courseId}});
    
            return res.json({"msg":"uploaded","file":req.file});
        }
    });
    
}


module.exports = {
    create,
    retrieve,
    update,
    destroy,
    findOne,
    profilePicture
}