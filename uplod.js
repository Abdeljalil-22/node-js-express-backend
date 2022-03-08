var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sriyank.siddhartha@gmail.com',
    pass: 'xxxx'
  }
});

var mailOptions = {
  from: 'sriyank.siddhartha@gmail.com',
  // to: 'smartherd@gmail.com, sriyank@smartherd.com',
  subject: 'Sending Email using Node.js',
  text: `Hi Smartherd, thank you for your nice Node.js tutorials.
          I will donate 50$ for this course. Please send me payment options.`
  // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});






















// const exphbs = require('express-handlebars'); // updated to 6.0.X
// const fileUpload = require('express-fileupload');


// app.post('/getImg', (req, res) => {
//     let imgFile;
//     let uploadPath;
  
//     if (!req.files || Object.keys(req.files).length === 0) {
//       return res.status(400).send('No files were uploaded.');
//     }
  
//     // name of the input is imgFile
//     imgFile = req.files.imgleFile;
//     uploadPath = __dirname + '/upload/' + imgFile.name;
  
//     console.log(imgFile);
  
//     // Use mv() to place file on the server
//     imgFile.mv(uploadPath, function (err) {
//       if (err) return res.status(500).send(err);
  
//         connection.query('UPDATE user SET profile_image = ? WHERE id ="1"', [imgFile.name], (err, rows) => {
//           if (!err) {
//             res.redirect('/');
//           } else {
//             console.log(err);
//           }
//         });
//       });
//   });


//   function imgUplode(file, id){
//     let imgFile;
//     let uploadPath;

//     if (!file || Object.keys(file).length === 0) {
//       return ('No files were uploaded.');
//     }



//     imgFile = file.imgleFile;
//     uploadPath = __dirname + '/upload/' + imgFile.name;
  
//     imgFile.mv(uploadPath, (err) => {
//       if (err) return (err);
  
//         connection.query('UPDATE user SET profile_image = $1 WHERE id =$2', [imgFile.name ,id], (err, rows) => {
//           if (!err) {
//             res.redirect('/');
//           } else {
//             console.log(err);
//           }
//         });
//       });
  
//   }