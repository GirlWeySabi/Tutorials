const db = require('../model');

const compareRandomDigit = async (req,res,next) =>{

    // console.log('kjd-s-----f--g-g-g--g-g--g--g-------',req.user.email);
    const data = await db.forget.findOne({
        where : {email:req.user.email},
        attribute : ['randomNumber']
    });

    data ? 
        data.length == 0 ?
            res.json({'msg':'invalid starting endpoint'})
            :data.randomNumber == req.body.randomNumber ?
                next()
                :res.json({'msg':'incorrect digits'})

        :res.json({'msg':'invalid starting endpoint'})
                
            

}

module.exports = compareRandomDigit;