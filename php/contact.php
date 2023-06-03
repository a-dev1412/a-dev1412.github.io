<?php
$to = 'admin@co2thunderboy.net'; //your e-mail
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = 'Subject';
$messages = 'From site www.co2thunderboy.net :</br></br>'.$name.'</br>'.$email.'</br></br>'.$message.'</br>';
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= 'From: visitor@co2thunderboy.net' . "\r\n";

mail($to, $subject, $messages, $headers);
?>