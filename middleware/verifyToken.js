const jwt = require("jsonwebtoken");
require('dotenv').config();


function  authUser  (req,res,next){

let token ;

if (
  req.headers.authorization &&
  req.headers.authorization.startsWith('Bearer')
)
try{
  token = req.headers.authorization.split(' ')[1];
const verified = jwt.verify(token,process.env.TOKEN_KEY);
res.user= verified;
next()
}catch(err){
  console.log(err);
    res.status(401).json("Invalid Token");

}

if (!token) return res.status(401).json("Access Denied")
}


function authRole(role) {
    
    return (req, res, next) => {
        
const token = req.headers.authorization.split(' ')[1];
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
