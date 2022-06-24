const router = require("express").Router();
const pool = require("../db");
const fileUpload = require('express-fileupload');
const {authUser,authRole }=require('./verifyToken');
const {getAllCompany,createCompany, setImg, getCompanyById, updateCompany, deleteCompany }=require('../Controllers/Company');


router.use(fileUpload());
//create a Company

router.post("/",authUser,createCompany );

router.post('/getImg',setImg );
  
  //get all Company
  
router.get("/",authUser,authRole('admin'),getAllCompany );


   //get all Company name id

router.get("/name",authUser,authRole('admin'),getCompanyById );
  

  //get a Company
  
router.get("/:id", getCompanyById);
    
    //update a Company
router.put("/:id", updateCompany);
    
    //delete a Company
    
router.delete("/:id", deleteCompany);





module.exports = router; 