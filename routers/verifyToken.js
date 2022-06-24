    const jwt = require("jsonwebtoken");

    require('dotenv').config()

 function authUser (req,res,next){

const token = req.header("auth_token");
if (!token) return res.status(401).json("Access Denied")

try{
const verified = jwt.verify(token,process.env.TOKEN_KEY);
res.user= verified;
next()
}catch(err){
    res.status(400).json("Invalid Token");

}
}


function authRole(role) {
    
    return (req, res, next) => {
        
const token = req.header("auth_token");
        const verified = jwt.verify(token,process.env.TOKEN_KEY);
      if ( verified.role !== role) {
        
        res.status(401)
        return res.json('Not allowed')
      }
  
      next()
    }
  }
  
  module.exports = {
    authUser,
    authRole
  }
