const router = require("express").Router();
const { status } = require("express/lib/response");
const pool = require("../db");
const jwt = require("jsonwebtoken");
require('dotenv').config()


router.post("/rgister", async(req,res)=>{

    
    
});
router.post("/login",async(req,res)=>{
    
     try {

        const {email ,password } = req.body
       // console.log(req.body.email);
         const emailExist = await pool.query(
        `SELECT users.Id , Account_privilege.privilege , users.usre_email  
        FROM users
         INNER JOIN Account_privilege on users.Id =  Account_privilege.account 
         where usre_email = $1 and  _Password=$2  ; `
        ,
        [email,password]);
        
        

        //console.log(emailExist.rows[0]);
        
        if(!emailExist.rows[0])
        { return res.status(400).json("email or password is wrong");}

        const token = jwt.sign({id:emailExist.rows[0].usre_email ,role: emailExist.rows[0].privilege},process.env.TOKEN_KEY,{expiresIn: '30d',})
        res.status(200).json({'token':token});
          

       
    
       
     }catch(err){
         console.log(err)
     }
    
    
});






module.exports = router; 