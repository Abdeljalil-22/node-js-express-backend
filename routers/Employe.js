const router = require("express").Router();
const {deleteEmployee,createEmployee,getImage,getAllEmployee,getEmployeeById,getEmployeeNameCompanyNumbarAuth,updateEmployee}=require("../Controllers/Employe")



//create a Employee

router.post("/", createEmployee);

router.post('/getImg', getImage);
  
  
  
  
  //get all Employee 
  
  router.get("/", getAllEmployee);


   //get all Employee name company numbar auth
  router.get("/table", getEmployeeNameCompanyNumbarAuth);
  
  //get a Employee
  
  router.get("/:id", getEmployeeById);
    
    //update a  Employee
    
  router.put("/:id", updateEmployee);
    
    //delete a Employee
    
  router.delete("/:id", deleteEmployee);






module.exports = router; 