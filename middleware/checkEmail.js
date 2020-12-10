const db = require("../model");

const checkAuthorsEmail = async (req,res,next) => {
    const data = await db.author.findOne({
        where : {email:req.body.email}
    });

    data ? res.json({"msg":"user with email already exit"}) : next();
}

const checkUserEmail = async (req,res,next) => {
    const data = await db.user.findOne({
        where : {email:req.body.email}
    });

    data ? res.json({"msg":"user with email already exit"}) : next();
}

module.exports = {
    checkAuthorsEmail,
    checkUserEmail
}