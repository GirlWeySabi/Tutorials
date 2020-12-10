const db = require("../model");
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');
const passport = require('passport');
const multer = require('multer');
const singleUpload = require('../middleware/profilePic');
const { password } = require("../model/config");

        


const findOne = async (req,res) => {
    const data = await db.author.findAll(
        {
            where: {
             id : req.user.id
        },
        include : [
            {
                model : db.topics,
                include : [{model : db.courses}]
                
            }
            
        ]
    });

    console.log(data);    
    res.json(data);
}

const create = async (req,res) => {

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);
    
    
    const data = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phoneNumber:req.body.phoneNumber,
        password:hash
    }
    
   
  await db.author.create(
        data
    );
   res.json('registered successfully');
}

const login = async function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    
    const author = await db.author.findOne({
        where:{
            email : email
        },

    });
    if(!author){ 
        return res.json('not user')
       
    }
    const checkPassword = bcrypt.compareSync(password, author.password); 
    if (!checkPassword){
        return res.json("Password incorrect")
        }
    else{
        const payLoad = {
        id : author.id
    }
    const token = jwt.sign(payLoad, 'myVerySecret');
    res.json({
        "token" : token,
        "msg" : "login successful",
        "author" : author,
        "status" : 200
    });
    
}}

const logout = async (req,res) =>{
    console.log('req.user.id',req.user.id);
   const user = req.user.id;
   const email = await db.author.findOne({
       where:{id:user},
       attribute:['email']
    });
  const data = await db.logout.create({
      userid:user,
      email:email.email
    });
   if(data) return res.json('logout');
   return res.json('not logout');
}


const update = async (req,res) => {
    await db.author.update(req.body,{where:{
        id : req.author.id
    }});
  res.json('updated successfully');
}

const remove = async (req,res) => {

    await db.author.destroy({
        where:{
            id : req.author.id
    }
});
    res.json('deleted successfully');
};

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
        
                await db.author.update({profile_pic:req.file.path},{where:{id:req.user.id}});
        
                return res.json({"msg":"uploaded","file":req.file});
            }
        });
        
}

module.exports ={
    // findAll,
    findOne,
    create,
    login,
    update,
    remove,
    profilePicture,
    logout

}

