<?php
    //require_once 'controllers/usuario/registro.php';
    $viewenviarMail = new enviar_email();

    class enviar_email
    {
        public function sendMail($usuario,$nombre,$telefono,$email,$mensaje)
        {
            //$postdata = json_decode(file_get_contents('php://input'), true);

        //     $fp = fopen('preubas.json', 'w');
        // // //fwrite($fp, json_encode($_FILES['type']));
        //     fwrite($fp, json_encode($postdata));
        //     fclose($fp);
            $emailhash = md5($email);
            
            require_once 'class.phpmailer.php';

            $mail = new PHPMailer();
    //indico a la clase que use SMTP
            $mail->isSMTP();
    //permite modo debug para ver mensajes de las cosas que van ocurriendo
    //Debo de hacer autenticación SMTP
            $mail->SMTPAuth = true;
            $mail->SMTPSecure = 'ssl';
    //indico el servidor de Gmail para SMTP
            $mail->Host = 'ssl://smtp.googlemail.com';
    //indico el puerto que usa Gmail
            $mail->Port = 465;
    //indico un usuario / clave de un usuario de gmail
            $mail->Username = 'easymovereto3@gmail.com';
            $mail->Password = 'easymove123';
            //$mail->setFrom('agirrearri@gmail.com', 'Enaut Agirre');
            $mail->setFrom($email, 'eAsyMove: '.$usuario);
            //$mail->addReplyTo("agirrearri@gmail.com", "Nombre completo");
            $mail->Subject = 'Verificacion de usuario';
            $mail->msgHTML(
                '<center>
                <p>Nombre: '.$nombre.'</p>
                <p>Email: '.$email.'</p>
                <p>Telefono: '.$telefono.'</p>
                <p>Mensaje: '.$mensaje.'</p>
                
                </center>');
    //indico destinatario
            
            $mail->addAddress('easymovereto3@gmail.com', 'Nire hotmail');
            if (!$mail->send()) {
                echo 'Error al enviar: '.$mail->ErrorInfo;
            } else {
                //echo 'Mensaje enviado!';
            }
        }
    }
