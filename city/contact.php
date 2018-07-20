<?php
header('Content-Type: application/json');
if($_POST)
{
require 'PHPMailerAutoload.php';
require("phpmailer/class.phpmailer.php");
                             // Passing `true` enables exceptions
try {
    $mail = new PHPMailer(); 
    //Server settings
    //$mail->SMTPDebug = 4;                                 // Enable verbose debug output
     $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'mail.alquilerestemporarioscaba.com.ar';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'info@alquilerestemporarioscaba.com.ar';                 // SMTP username
    $mail->Password = 'alquiler2018';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;   
    //Recipients
    $mail->setFrom('info@alquilerestemporarioscaba.com.ar', 'Mensaje de la Web');
    $mail->addAddress('lg.design.web@gmail.com', 'Leandro Garcia');     // Add a recipient
    $user_Email       = filter_var($_POST["userEmail"], FILTER_SANITIZE_EMAIL);
    //$mail->addAddress('rol-eventos@hotmail.com');               // Name is optional
    $mail->addReplyTo($user_Email);
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    
   $user_Name        = filter_var($_POST["userName"], FILTER_SANITIZE_STRING);
    
    $user_Subject =  $_POST["userSubject"];
    $user_Message     = filter_var($_POST["userMessage"], FILTER_SANITIZE_STRING);
    $message_Body = "Nombre: ". $user_Name ."\r\n";
    $message_Body .= "Email: ". $user_Email ."\r\n";
    $message_Body .= "Asunto: ". $user_Subject ."\r\n";
    $message_Body .= "Mensaje: ". $user_Message ."\r\n";
    
    $mail->Subject = $user_Subject;
    
    $mail->Body    = $message_Body;
    $mail->AltBody = $message_Body;
    $output = json_encode(array('type'=>"message", 'text' => "Buen dia ".$user_Name ." Gracias por contactarnos."));

    if($mail->send()){
        die($output);
    }
    
    } catch (Exception $e) {
            $output = json_encode(array('type'=>'error', 'text' => 'Hubo un error al enviar el email, por favor contactarse por otro medio.'));
        die($output);
    
}
}
?>
