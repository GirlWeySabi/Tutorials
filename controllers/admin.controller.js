const db = require('../model');
const singleUpload = require('../middleware/profilePic');
const multer = require('multer');


const allAuthors = async (req,res) =>{
    const data = await db.author.findAll();
        
    data ?
    data.length == 0 ? 
        res.json({'msg':'no register authors yet'})
        :res.json(data)
    : res.json({'msg':'fail to fecth authors'})
}

const allUsers = async (req,res) =>{
    const data = await db.user.findAll();
    
    data ?
    data.length == 0 ? 
        res.json({'msg':'no register user yet'})
        :res.json(data)
    : res.json({'msg':'fail to fecth user'})
}

const updateUser = async (req,res) =>{
    const data = await db.user.update(
        req.body
       ,{
            where:{id:req.params.id}
        });
    data ? 
      res.json(data)
    : res.json({'msg':'update user successfull'});    
}

const updateAuthor = async (req,res) =>{
    const data = await db.author.update(
        
           req.body
            //TODO: multer update photo
        ,{
            where:{id:req.params.id}
        });
    data ? 
      res.json(data)
    : res.json({'msg':'update author successfull'});    
}

const deleteAuthor = async (req,res) =>{
    const data = await db.author.destroy(
        {
           
            where:{id:req.params.id}
        });
    data ? 
      res.json(data)
    : res.json({'msg':'delete author successfull'});    
}

const deleteUser = async (req,res) =>{
    const data = await db.user.destroy(
        {
           
            where:{id:req.params.id}
        });
    data ? 
      res.json(data)
    : res.json({'msg':'delete user successfull'});    
}


const authorProfilePicture = (req,res)=>{
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
    
            await db.author.update({profile_pic:req.file.path},{where:{id:req.params.id}});
    
            return res.json({"msg":"uploaded","file":req.file});
        }
    });
    
}

const userProfilePicture = (req,res)=>{
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
    
            await db.user.update({profile_pic:req.file.path},{where:{id:req.params.id}});
    
            return res.json({"msg":"uploaded","file":req.file});
        }
    });
    
}

const allPost = async (req,res) =>{
    const data = await db.topics.findAll();
    data ?
        data.length == 0 ? 
            res.json({'msg':'no topics yet'})
            :res.json(data)
        : res.json({'msg':'fail to fecth topics'})
        
}

const singlePost = async (req,res) =>{
    const data = await db.topics.findOne({where:{id:req.params.id}});
    data ?
        data.length == 0 ? 
            res.json({'msg':'no topics yet'})
            :res.json(data)
        : res.json({'msg':'fail to fecth topics'})
        
}

const updatePost = async (req,res) =>{
    const data = await db.topics.update({aprove:req.body.aprove},{where:{id:req.params.id}});
    data ?
        res.json(data)
        : res.json({'msg':'no topics yet'})
        
}


const allCourse = async (req,res) =>{
    const data = await db.courses.findAll();
    data ?
        data.length == 0 ? 
            res.json({'msg':'no topics yet'})
            :res.json(data)
        : res.json({'msg':'fail to fecth topics'})
        
}

const singleCourse = async (req,res) =>{
    const data = await db.courses.findOne({where:{id:req.params.id}});
    data ?
        data.length == 0 ? 
            res.json({'msg':'no topics yet'})
            :res.json(data)
        : res.json({'msg':'fail to fecth topics'})
        
}

const updateCourse = async (req,res) =>{
    const data = await db.courses.update({aprove:req.body.aprove},{where:{id:req.params.id}});
    data ?
        res.json(data)
        : res.json({'msg':'no topics yet'})
        
}


module.exports = {
    allAuthors,
    allUsers,
    updateUser,
    updateAuthor,
    deleteAuthor,
    deleteUser,
    userProfilePicture,
    authorProfilePicture,
    allPost,
    singlePost,
    updatePost,
    allCourse,
    singleCourse,
    updateCourse
}