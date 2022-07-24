<?php

  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  $mailHeader = "From:".$name."<".$email.">\r\n";

  $recipient = "condreaychris@gmail.com";

  mail($recipient, $name, $email, $phone, $message, $mailHeader) or die("Error!");

  echo `
  
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/52a67c9491.js" crossorigin="anonymous"></script> 
    <link rel="stylesheet" href="./assets/styles/style.css">
    <title>Chris Condreay</title>
  </head>
  <body>

    <h1>Thank you!</h1>
    <p>I'll be sure to get back to as soon as possible!</p>
    <p>Head back to <a href="./index.html">homepage</a></p>

  </body>
  </html>
  
  `;

?>