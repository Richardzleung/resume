const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const nodemailer = require('nodemailer'); 
require('dotenv').config()

const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV || 'development';
const app = express();


app.use(express.json())

if (ENV === 'development') {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
} else {
  app.use(favicon(__dirname + '/build/favicon.ico'));
  app.use(express.static('build'));
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.get('/ping', (req, res) => {
 return res.send('pong');
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: process.env.RECEIVING_EMAIL,
    subject: `Message from ${name} at ${email}!`,
    text: message
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  return res.status(200); 
});

app.listen(PORT, console.log(`Server running on port ${PORT}`));