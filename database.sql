CREATE DATABASE perntodo;

CREATE TABLE Company (
    Company_id SERIAL PRIMARY KEY,
    Company_name VARCHAR(255),
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
    Company INT foreign  KEY REFERENCES  Company( Company_id),
     privilege_id INT foreign  KEY REFERENCES Account_privilege(Id)

); 



CREATE TABLE Users (
    Id SERIAL PRIMARY KEY,
    usre_email VARCHAR(150) ,
    _Password VARCHAR(50),
    
); 

CREATE TABLE  Account_privilege{
    Id  SERIAL PRIMARY KEY,
     account_privilege VARCHAR(20)
     account INT foreign  KEY REFERENCES Users(Id)
}


