CREATE DATABASE perntodo;

CREATE TABLE Company (
    Company_id SERIAL PRIMARY KEY,
    Company_name1 VARCHAR(255),
    Company_Name VARCHAR(255), --to do drpb table
    postal_code VARCHAR(10),
    address VARCHAR(500), 
    telephone_number VARCHAR(20), 
    email_address VARCHAR(50),
    HP_URL VARCHAR(255), 
    date_establishment DATE DEFAULT CURRENT_DATE,
    remarks VARCHAR(300) , 
    image VARCHAR(255)
  
);


CREATE TABLE Employee (
    Employee_id SERIAL PRIMARY KEY,
    Employee_number VARCHAR(255) , 
    department VARCHAR(40),
    Employee_name VARCHAR(200),
    zip_code VARCHAR(255),
   Employee_address VARCHAR(255),
    telephone_number VARCHAR(20)
    , date_birth  DATE ,
    remarks VARCHAR(255), 
    profile_image VARCHAR(255),
    Company int  REFERENCES  Company( Company_id),
     privilege_id INT    REFERENCES Account_privilege(Id)

); 

Employee_number ,department,Employee_name ,zip_code ,Employee_address ,telephone_numbe, date_birth ,remarks ,profile_image 


CREATE TABLE Users (
    Id SERIAL PRIMARY KEY,
    usre_email VARCHAR(150) ,
    _Password VARCHAR(50)
    
); 

CREATE TABLE  Account_privilege(
    Id  SERIAL PRIMARY KEY,
     privilege VARCHAR(20),
     account INT 
);

-- system administrator, administrative, and
-- -- general
SELECT users.Id , Account_privilege.privilege , users.usre_email  
        FROM users
         INNER JOIN Account_privilege on users.Id =  Account_privilege.account

         insert into users (usre_email ,_Password) values('system.@gmail.com','system')
         insert into users (usre_email ,_Password) values('admin.@gmail.com','admin');
         insert into users (usre_email ,_Password) values('general.@gmail.com','general');

         Account_privilege

         insert into  Account_privilege (privilege , account) values('system administrator',1)
         insert into  Account_privilege (privilege , account) values('administrator',2);
         insert into  Account_privilege (privilege , account) values('general',3);
         system administrator, administrative, and

// Company_name , postal_code,address  ,telephone_number, 
        // email_address,HP_URL  ,date_establishment ,remarks ,image