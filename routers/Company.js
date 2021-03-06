const router = require("express").Router();
const fileUpload = require('express-fileupload');
const {authUser,authRole }=require('../middleware/verifyToken');
const {getAllCompany,createCompany, setImg, getCompanyById, updateCompany, deleteCompany }=require('../Controllers/Company');


router.use(fileUpload());
//create a Company

router.post("/",createCompany );

router.post('/getImg',setImg );
  
  //get all Company
  
router.get("/",getAllCompany );
//,authRole('admin')


   //get all Company name id

router.get("/name",getCompanyById );
  

  //get a Company
  
router.get("/:id", getCompanyById);
    
    //update a Company
router.put("/:id", updateCompany);
    
    //delete a Company
    
router.delete("/:id", deleteCompany);





module.exports = router; 