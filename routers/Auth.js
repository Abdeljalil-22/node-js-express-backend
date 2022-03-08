const router = require("express").Router();
const { status } = require("express/lib/response");
const pool = require("../db");
const jwt = require("jsonwebtoken");


router.post("/rgister", async(req,res)=>{

    
    
});
router.post("/login",async(req,res)=>{
    
     try {

        const {email ,password } = req.body
        console.log(req.body.email);
         const emailExist = await pool.query(
        "SELECT * FROM Users  where usre_email = $1 and  _Password=$2 "
        ,
        [email,password]);
        //--
  
        //console.log(emailExist.rows[0]);
        
        if(!emailExist.rows[0])
        { return res.status(400).json("email or password is wrong");}

            const token = jwt.sign({id:emailExist.rows[0].usre_email ,role: emailExist.rows[0].account_privilege},process.env.TOKEN_KEY)
            res.header('auth_token',token).json('login');
          

       
    
       
     }catch(err){
         console.log(err)
     }
    
    
});





module.exports = router; 