const db = require('../model');
const bcrypt = require('bcrypt');

const jwt =require('jsonwebtoken');

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
    res.json('registration successful');
    console.log(data);
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
    const token = jwt.sign(payLoad, 'myVerySecret');
    res.json({
        "token" : token,
        "msg" : "login successful",
        "user" : user,
        "status" : 200
    });
    
}}


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
    profile,
    update,
    destroy,
    login
}