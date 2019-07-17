const nodemailer = require("nodemailer");


module.exports = {
  addContactForm: (req, res) => {
   console.log(req.body);
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SENDEREMAIL,
        pass: process.env.PASSWORD
      }
    });

    let mailOptions = {
      from: "Nano",
      to: process.env.RECIEVER,
      subject: "Contact Form From Portfolio",
      text: "Something Happened",
      html: `
         <style>
            @import url('https://fonts.googleapis.com/css?family=Roboto');
        </style>
            <h1>You've got a contact form from Nano.</h1>
            <p style="color: black; font-weight: bold; font-size: 18px;">First Name: 
            <p style="font-size: 14px;"> ${req.body.name}</p>
            <p style="color: black; font-weight: bold; font-size: 18px;">Last Name:</p> 
            <p style="font-size: 14px;">${req.body.email}</p>
            <p style="color: black; font-weight: bold; font-size: 18px;">Message:</p> 
            <p style="font-size: 14px;">${req.body.message}</p>`
    };

    transporter.sendMail(mailOptions, function(err, res) {
      if (err) {
        console.log("Error in Authnodemailer", err);
      } else {
        console.log("Email Sent");
      }
    });
    
    res.sendStatus(200);
  }
};




