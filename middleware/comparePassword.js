
const comparePassword =  (req,res,next) => {
    const data = req.body;
    data.password == data.confirmPassword ? next() : res.json({
        "msg" : "Your password does not match"
    });
}

module.exports = comparePassword;