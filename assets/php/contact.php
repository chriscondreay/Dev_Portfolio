<?php

  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  $email_from = "condreaychris@gmail.com";

  $email_subject = "New Form Submission";

  $email_body = "Name: $name \n".
  "Email: $email \n".
  "Phone: $phone \n".
  "Message: $message".

  $to = "condreaychris@gmail.com";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $email \r\n";

  mail($to, $email_subject, $email_body, $header)

  header("Location: index.html");

?>