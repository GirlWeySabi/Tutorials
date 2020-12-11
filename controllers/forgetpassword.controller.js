const db = require('../model');
const nodemailer = require('nodemailer');
const randomNumber = require('../middleware/randomNumber');
const jwt =require('jsonwebtoken');

const bcrypt = require('bcrypt');

const validNumber = randomNumber();

const verifyEmailAuthor = async (req,res) =>{
    const data = await db.author.findOne({where:{email:req.body.email}});
    if(!data){
        return res.json({'msg':'this email is not register'});
    }

    const output = `
    <p>You have a new contact request</p>
    <ul>
        
        <li>msg: ${validNumber}</li>
       
    </ul>
`;

async function main() {
    
   // let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'luz.bode98@ethereal.email', // generated ethereal user
        pass: 'JGcYCu1rXRrHbRx32X', // generated ethereal password
      },
      tls:{
          rejectUnauthorized:false
      }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"From NodeMailer" <onemusty.z@gmail.com>', // sender address
      to: req.body.email, // list of receivers
      subject: "Testing NodeMailer", // Subject line
      text: "Hello world?", // plain text body
      html: output, // html body
    });
    

   const forget = await db.forget.create({
      email: req.body.email,
      password: req.body.password,
      randomNumber: validNumber
    });

   
      const payLoad = {
        email : forget.email
    }
    
    
  const token = jwt.sign(payLoad, 'myVerySecretForget');
  res.json({
      "token" : token,
      "msg" : "email sent successful",
      "forget" : forget,
      "status" : 200
  });

    console.log("Message sent: %s", info.messageId);
    
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    // res.json({
    //   "msg":"Your message has been sent",
    //   'messageId': info.messageId,
    //   'preview':nodemailer.getTestMessageUrl(info)
    // });
  }
  
  main().catch(console.error);
    // return res.json({'msg':'email verified'});
    // 

    }


    const verifyEmailUser = async (req,res) =>{
      const data = await db.user.findOne({where:{email:req.body.email}});
      if(!data){
          return res.json({'msg':'this email is not register'});
      }
  
      const output = `
      <p>You have a new contact request</p>
      <ul>
          
          <li>msg: ${validNumber}</li>
         
      </ul>
  `;
  
  async function main() {
      
     // let testAccount = await nodemailer.createTestAccount();
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'luz.bode98@ethereal.email', // generated ethereal user
          pass: 'JGcYCu1rXRrHbRx32X', // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"From NodeMailer" <onemusty.z@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: "Testing NodeMailer", // Subject line
        text: "Hello world?", // plain text body
        html: output, // html body
      });
      
  
     const forget = await db.forget.create({
        email: req.body.email,
        password: req.body.password,
        randomNumber: validNumber
      });
  
     
        const payLoad = {
          email : forget.email
      }
      
      
    const token = jwt.sign(payLoad, 'myVerySecret');
    res.json({
        "token" : token,
        "msg" : "email sent successful",
        "forget" : forget,
        "status" : 200
    });
  
      console.log("Message sent: %s", info.messageId);
      
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      // res.json({
      //   "msg":"Your message has been sent",
      //   'messageId': info.messageId,
      //   'preview':nodemailer.getTestMessageUrl(info)
      // });
    }
    
    main().catch(console.error);
      // return res.json({'msg':'email verified'});
      // 
  
      }
  

const changePassword = async (req,res)=>{

  await db.forget.destroy({where:{randomNumber:req.body.randomNumber}});
  return res.json({'msg':'password change successful'})
}


    module.exports = {
        verifyEmailAuthor,
        verifyEmailUser,
        changePassword
    }