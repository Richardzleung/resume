const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer'); 
const Blog = require('./models/blog');
const { errorHandler } = require('./utils/middleware');

require('dotenv').config()


const app = express();

app.use(favicon(__dirname + '/build/favicon.ico'));

if (process.env.NODE_ENV === 'development') {
  app.use(cors({ origin: 'http://localhost:3000' }))
}

app.use(express.static('build'));
app.use(express.json());

app.get('/api/posts', (_, response) => {
  Blog.find({}).then(posts => {
    response.json(posts)
  })
});
app.get('/api/posts/:id', (request, response, next) => {
  Blog.findById(request.params.id)
    .then(post => {
      if (post) response.json(post);
      else response.status(404).end();
    })
    .catch (error => next(error))
});

// * health
app.get('/ping', (_, res) => {
 return res.send('pong');
});

// * emailer
app.post('/api/email', (req, res) => {
  const body = req.body
  if(!body) {
    return res.status(400).send({ error: 'Error sending email' })
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

app.get('/*', function (_, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server running on port ${PORT}`));