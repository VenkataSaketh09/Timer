const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('Email username:', process.env.EMAIL_USERNAME);
console.log('Email password:', process.env.EMAIL_PASSWORD);
// Create a transporter object
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Define a function to send the email
async function sendEmail(description) {
  try {
    console.log('Sending email...');
    let info = await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: 'recipient@example.com',
      subject: 'Timer notification',
      text: `Timer set for ${description}`
    });
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

// Call the sendEmail function when the timer is set
sendEmail('iufshiu');