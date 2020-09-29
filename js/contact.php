<?php
 $names = $_POST['names'];
 $company = $_POST['company'];
 $email = $_POST['email_address'];
 $comment = $_POST['comment'];
 $to ='info@provisiontree.com';
 
 $message = "";
 $message .= "*Name: " . htmlspecialchars($names, ENT_QUOTES) . "<br>\n";
 $message .= "*Company: " . htmlspecialchars($company, ENT_QUOTES) . "<br>\n";
 $message .= "*E-mail: " . htmlspecialchars($email, ENT_QUOTES) . "<br>\n";
 $message .= "Message: " . htmlspecialchars($comment, ENT_QUOTES) . "<br>\n";
 $lowmsg = strtolower($message);
  
 $headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=iso-8859-1\r\n";
 $headers .= "From: \"" . $names . "\" <" . $email . ">\r\n";
 $headers .= "Reply-To: " .  $email . "\r\n";
 $message = utf8_decode($message);  mail($to, "Note from the Contact Form", $message, $headers);
 
 if ($message){
 		echo 'sent';
 }else{
 	  echo 'failed';
 }
?>