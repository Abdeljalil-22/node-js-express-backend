const router = require("express").Router();
const pool = require("../db");
const fileUpload = require('express-fileupload');


router.use(fileUpload());
//create a Company

router.post("/", async (req, res) => {
    try {
      
  
      const { nome,postalCode,address,telephoneNumber,emailAddress,HPURL,dateEstablishment,remarks } = req.body;
      //console.log(nome,postalCode,address,telephoneNumber,emailAddress,HPURL,dateEstablishment,remarks,image);
      const newCompany = await pool.query(
        "INSERT INTO company (Company_name , postal_code,address  ,telephone_number, email_address,HP_URL ,date_establishment ,remarks ) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *",
        [nome,postalCode,address,telephoneNumber,emailAddress,HPURL,dateEstablishment,remarks]
      );
  
        res.json( newCompany.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  router.post('/getImg', (req, res) => {
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
  
      pool.query('UPDATE company SET image = $1 WHERE  Company_id = 1', [imgFile.name], (err, rows) => {
          if (!err) {
            res.redirect('/');
          } else {
            console.log(err);
          }
        });
      });
  });
  
  
  
  
  //get all Company
  
  router.get("/", async (req, res) => {
    try {
      const allCompany = await pool.query("SELECT * FROM company");
      res.json(allCompany.rows);
      
    } catch (err) {
      console.error(err.message);
    }
  });
   //get all Company name id
  router.get("/name", async (req, res) => {
    try {
      const allCompanyNames = await pool.query("SELECT Company_name, Company_id  FROM company");
      res.json(allCompanyNames.rows);
      
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get a Company
  
  router.get("/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const company = await pool.query("SELECT * FROM company WHERE  company_id= $1", [
          id
        ]);
    
        res.json(company.rows[0]);
      } catch (err) {
        console.error(err.message);
      }
    });
    
    //update a Company
    
   router.put("/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const { nome,postalCode,address,telephoneNumber,emailAddress,HPURL,dateEstablishment,remarks,image } = req.body;
        const updateCompany = await pool.query(
          "UPDATE company SET Company_name =$1, postal_code = $2,address =$3  ,telephone_number = $4, email_address =$5,HP_URL =$6 ,date_establishment =$7,remarks =$8 ,image =$9  WHERE company_id = $10",
          [nome,postalCode,address,telephoneNumber,emailAddress,HPURL,dateEstablishment,remarks,image , id]
        );
    
        res.json("company was updated!");
      } catch (err) {
        console.error(err.message);
      }
    });
    
    //delete a Company
    
    router.delete("/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const deleteCompany = await pool.query("DELETE FROM company WHERE company_id = $1", [
          id
        ]);
        res.json("company was deleted!");
      } catch (err) {
        console.log(err.message);
      }
    });





module.exports = router; 