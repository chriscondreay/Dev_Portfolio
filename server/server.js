const express = require( 'express');
const app = express();
const fs = require('fs')
const nodemailer = require('nodemailer')

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
      pass: 'fgwaewuhgokgqzdr'
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

// function getImages(req,res){
//   fs.readFile('image.jpg', function(err, data) {
//     if (err) throw err; // Fail if the file can't be read.
//       res.writeHead(200, {'Content-Type': 'image/jpeg'});
//       res.end(data); // Send the file data to the browser.
//   });
// };

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
})