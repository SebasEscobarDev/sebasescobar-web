<?php

$to = 'sebas22185@gmail.com';
$from = 'website@sebasescobar.com';
$subject = $_POST['fullname'].' / '.$_POST['asunto'];

$name = "<h2><b>Nombre:</b> ".$_POST['fullname']."</h2>";
$email = "<p><b>Email:</b>: ".$_POST['email']."</p>";
$phone = "<p><b>Asunto:</b>: ".$_POST['asunto']."</p>";
$message = "<p><b>Mensaje:</b>: ".$_POST['message']."</p>";
$body = "<div style='padding30px;background:#1e1e1e;color:white'>".$name."".$email."".$phone."".$message."</div>";
$headers = 'From: SebasEscobar <'.$from.'>' . "\r\n" ;
$headers .='Reply-To: '. $to . "\r\n" ;
$headers .='X-Mailer: PHP/' . phpversion();
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

$rico_number = '321 660 5657';

$data;

if(mail($to, $subject, $body,$headers)) {
  //echo('<br>'."Email Sent ;D ".'</br>');
  $data = ['msj'=>'Mensaje Enviado'];
} else {
  //echo("<p>Email Message delivery failed...</p>");
  $data = ['msj'=>'Falló Envio'];
}
  header('Content-type: application/json');
  echo json_encode( $data );



?>