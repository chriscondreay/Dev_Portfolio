const express = require( 'express');
const app = express();
const fs = require('fs');
const nodemailer = require('nodemailer');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Middleware 
app.use(express.static('public'))
app.use(express.json())
// app.use('../assets/images', express.static('images'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + './public/index.html')
});

app.post('/', (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'condreaychris@gmail.com',
      pass: 'nxregxnjzkpooapm'
    }
  })

  const mailOptions = {
    from: req.body.email,
    to: 'condreaychris@gmail.com',
    subject: `Message from ${req.body.name}`,
    text: `
    Email: ${req.body.email}
    Phone: ${req.body.phone}
    Message: ${req.body.message}
    `,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error')
    } else {
      console.log('Email sent: ' + info.response);
      res.send('success')
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
})