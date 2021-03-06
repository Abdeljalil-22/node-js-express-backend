const pool = require("../config/db");



//create a Employee


const createEmployee= async (req, res) => {
    try {
      
  
      const { number ,department,name ,zip_code ,address ,telephoneNumbe, dateBirth ,remarks ,company  } = req.body;
      
      const newEmployee = await pool.query(
        "INSERT INTO  Employee (Employee_number ,department,Employee_name ,zip_code ,Employee_address ,telephone_number, date_birth ,remarks ) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
        [number ,department,name ,zip_code ,address ,telephoneNumbe, dateBirth ,remarks  ]
      );
  
        res.json( newEmployee.rows);
    } catch (err) {
      console.error(err.message);
    }
  }

  
  const getImage=async (req, res) => {
    let imgFile;
    let uploadPath;
  
  
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    // name of the input is imgFile
    imgFile = req.files.imgFile;
    uploadPath = __dirname + '/upload/' + imgFile.name;
  
    //console.log(imgFile);
  
    // Use mv() to place file on the server
    imgFile.mv(uploadPath, function (err) {
      if (err) return res.status(500).send(err);
  
      pool.query('UPDATE Employee SET profile_image  = $1 WHERE  Company_id = 1', [imgFile.name], (err, rows) => {
          if (!err) {
            res.redirect('/');
          } else {
            console.log(err);
          }
        });
      });
  }
  
  
  
  
  //get all Employee 
  

  const getAllEmployee= async (req, res) => {
    try {
      const allEmployee = await pool.query("SELECT * FROM Employee");
      res.json(allEmployee.rows);
      
    } catch (err) {
      console.error(err.message);
    }
  }


   //get all Employee name company numbar auth
 
  const getEmployeeNameCompanyNumbarAuth =async (req, res) => {
    try {
        
      const allEmployee = await pool.query("SELECT Company_name ,account_privilege ,Employee_number ,department,Employee_name  FROM company ,Employee ,Users  where Company = Company_id and privilege_id = Account_privilege.Id  ");
      res.json(allEmployee.rows);
      
    } catch (err) {
      console.error(err.message);
    }
  }
  
  //get a Employee
  

  const getEmployeeById=async (req, res) => {
      try {
        const { id } = req.params;
        const  Employee = await pool.query("SELECT * FROM  Employee WHERE  Employee_id= $1", [
          id
        ]);
    
        res.json( Employee.rows[0]);
      } catch (err) {
        console.error(err.message);
      }
    }
    
    //update a  Employee
    
  
   const updateEmployee =async (req, res) => {
      try {
        const { id } = req.params;
        const {number ,department,name ,zip_code ,address ,telephoneNumbe, dateBirth ,remarks ,company } = req.body;
        const updateEmployee = await pool.query(
          "UPDATE Employee SET Employee_number =$1,department=$2,Employee_name=$3 ,zip_code=$4 ,Employee_address=$5 ,telephone_number=$6, date_birth=$7,remarks=$8 WHERE Employee_id = $9",
          [number ,department,name ,zip_code ,address ,telephoneNumbe, dateBirth ,remarks , id]
        );
    
        res.json("Employee was updated!");
      } catch (err) {
        console.error(err.message);
      }
    }
    
    //delete a Employee
    
  
    const deleteEmployee =async (req, res) => {
      try {
        const { id } = req.params;
        const deleteEmployee = await pool.query("DELETE FROM Employee WHERE Employee_id = $1", [
          id
        ]);
        res.json("Employee was deleted!");
      } catch (err) {
        console.log(err.message);
      }
    }






    module.exports ={deleteEmployee,createEmployee,getImage,getAllEmployee,getEmployeeById,getEmployeeNameCompanyNumbarAuth,updateEmployee}