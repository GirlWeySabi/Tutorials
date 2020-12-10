const db = require('../model');
const bcrypt = require('bcrypt');

const jwt =require('jsonwebtoken');
const multer = require('multer');
const singleUpload = require('../middleware/profilePic')

const passport = require('passport');
const create = async (req, res) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const data = req.body;
    data.password = hash;

    await db.user.create(
        data
    );
    res.json('registered successfully');
    console.log(data);
}

const follow = async (req, res) => {

    var authorId = req.params.id;
    var userId = req.user.id;

    await db.follow.create(
        {
            authorId: authorId,
            userId: userId

        }
    );
    res.json('following');
}

const retrieve = async (req, res) => {
    const retrievedData = await db.user.findAll();
    console.log(retrievedData);
    res.json(retrievedData);
} 

const login = async function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    
    const user = await db.user.findOne({
        where:{
            email : email
        },

    }

    );
    if(!user){ 
        return res.json('not user')
       
    }
    const checkPassword =bcrypt.compareSync(password, user.password); 
    if (!checkPassword){
        return res.json("Password incorrect")
        }
    else{
        const payLoad = {
        id : user.id,
    }
    const token = jwt.sign(payLoad, 'myVerySecretUser');
    res.json({
        "token" : token,
        "msg" : "login successful",
        "user" : user,
        "status" : 200
    });
    
}}

const logout = async (req,res) =>{
    console.log('req.user.id',req.user.id);
   const user = req.user.id;
   const email = await db.user.findOne({
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

const profile = async (req,res) => {
    const retrievedData = await db.user.findOne({where: {
        id : req.user.id
    },

    include :[
        {
            model : db.comment
        },
        {
            model : db.reaction
        }
   ]
});
    
    res.json(retrievedData);
}


const update = async (req, res) => {
    const inputId = req.user.id;
    console.log(req.body)
    await db.user.update(req.body , {
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
    
            await db.user.update({profile_pic:req.file.path},{where:{id:req.user.id}});
    
            return res.json({"msg":"uploaded","file":req.file});
        }
    });
    
}

module.exports = {
    create,
    retrieve,
    profile,
    update,
    destroy,
    login,
    profilePicture,
    follow,
    logout
}