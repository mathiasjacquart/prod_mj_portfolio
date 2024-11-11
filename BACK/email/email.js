const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail", 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})


const sendContactForm = async (email, message, firstname, surname) => {
    const mailOptions = { 
      from:process.env.EMAIL_USER, 
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `${firstname} ${surname} Formulaire de contact`,
      html: `Bonjour, voici mon adresse e-mail : ${email}. <br/>
      je me permets de vous contact pour la raison suivante : <br/>
       ${message}`
    };
    await transporter.sendMail(mailOptions)
  }

  module.exports = { 
    sendContactForm
  };