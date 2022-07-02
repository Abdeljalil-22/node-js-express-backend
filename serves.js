const express = require("express");
const cors = require("cors");
const fileUpload = require('express-fileupload');
const employe =require("./routers/Employe");
const auth =require("./routers/Auth");
const company = require("./routers/Company");
const {authUser,authRole }=require('./middleware/verifyToken');

const app = express();

//middleware
app.use(cors());
app.use(express.json()); //req.body
app.use("api/v1/employe",authUser,employe);
app.use("api/v1/company",authUser,company);
app.use("api/v1/",auth);
app.use(fileUpload());
  


app.listen(5000, () => {
    console.log("server has started on port 5000");
  });
  