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
    $mail->Port = 587;                                    // TCP port to connect to
    //587 default
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
    $user_Name = $_POST["userName"];
    $user_Phone =  $_POST["userTelefono"];
    $user_FechaInicio = filter_var($_POST["userFechaInicio"], FILTER_SANITIZE_STRING);
    $user_FechaFin = filter_var($_POST["userFechaFin"], FILTER_SANITIZE_STRING);
    $user_CantAdultos = filter_var($_POST["userCantAdultos"], FILTER_SANITIZE_STRING);
    $user_CantNinios = filter_var($_POST["userCantNinios"], FILTER_SANITIZE_STRING);
    $user_CantBebes = filter_var($_POST["userCantBebes"], FILTER_SANITIZE_STRING);
    $user_Comentarios = filter_var($_POST["ComentariosR"], FILTER_SANITIZE_STRING);
    $message_Body = "<strong>Nombre: </strong>". $user_Name ."<br>";
    $message_Body .= "<strong>Telefono: </strong>". $user_Phone ."<br>";
    $message_Body .= "<strong>Fecha inicio: </strong>". $user_FechaInicio ."<br>";
    $message_Body .= "<strong>Fecha Fin: </strong>". $user_FechaFin ."<br>";
    $message_Body .= "<strong>Cantidad de Adultos: </strong>". $user_CantAdultos ."<br>";
    $message_Body .= "<strong>Cantidad de Ni単os: </strong>". $user_CantNinios ."<br>";
    $message_Body .= "<strong>Cantidad de Bebes: </strong>". $user_CantBebes ."<br>";
    $message_Body .= "<strong>Mensaje: </strong>". $user_Comentarios ."<br>";
    
    $mail->Subject = "Contacto Reserva web";
    
    $mail->Body    = $message_Body;
    $mail->AltBody = $message_Body;
    $output = json_encode(array('type'=>"message", 'text' => "Buen dia ".$user_Name ." .Gracias por contactarnos."));

    if($mail->send()){
        die($output);
    }
    
    } catch (Exception $e) {
            $output = json_encode(array('type'=>'error', 'text' => 'Hubo un error al enviar el email, por favor contactarse por otro medio.'));
        die($output);
    
}
}
?>
