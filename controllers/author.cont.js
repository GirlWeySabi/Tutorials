const db = require("../model");


const findAll = async (req,res) => {
    let input = req.params.id;
    const data = await db.author.findAll(
        {
            where:{
                id :input
            },
            include : db.topics
        }
    );
        res.json(data);
        
};

const findOne = async (req,res) => {
    let input = req.params.id;
    const data = await db.author.findAll(
        {
            where: {
             id : input
        },
        include : [
            {
                model : db.topics,

            },
            {
               model : db.course

            }
        ] 
    });

    console.log(data);    
    res.json(data);
}

const create = async (req,res) => {
    const data = req.body;
    console.log(data);
    console.log('hello');
  const dd = await db.author.create(
        data
    );
   res.json(dd);
}

const update = async (req,res) => {
    const input = req.params.id;
    await db.author.update(req.body,{where:{
        id : input
    }});
  res.json('update suc');
}

const remove = async (req,res) => {

    const input = req.params.id;
    await db.author.destroy({
        where:{
            id : input
    }
});
    res.json('deleted');
};

module.exports ={
    findAll,
    findOne,
    create,
    update,
    remove

}

