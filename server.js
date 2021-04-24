const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const nodemailer = require('nodemailer'); 

require('dotenv').config()

const PORT = process.env.PORT || 8080;
const app = express();

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static('build'));
app.use(express.json())

app.get('/ping', (req, res) => {
 return res.send('pong');
});

app.post('/', (req, res) => {
  const body = req.body
  if(!body) {
    return res.status(400).send('Error sending email')
  }
  console.log({ body })
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
    subject: `Message from ${body.name} at ${body.email}!`,
    text: body.message
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  return res.status(200).send({ status: 'Email Sent!' }); 
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, console.log(`Server running on port ${PORT}`));