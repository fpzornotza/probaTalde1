<?php
        require_once('class.phpmailer.php');
        $mail = new PHPMailer();
//indico a la clase que use SMTP
        $mail ->isSMTP();
//permite modo debug para ver mensajes de las cosas que van ocurriendo
//Debo de hacer autenticación SMTP
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = "ssl";
//indico el servidor de Gmail para SMTP
        $mail->Host = 'ssl://smtp.googlemail.com';
//indico el puerto que usa Gmail
        $mail->Port = 465;
//indico un usuario / clave de un usuario de gmail
        $mail->Username = "easymovereto3@gmail.com";
        $mail->Password = "easymove123";
        //$mail­>setFrom('agirrearri@gmail.com', 'Enaut Agirre');
        $mail->setFrom('easymovereto3@gmail.com', 'Easy Move');
        //$mail->addReplyTo("agirrearri@gmail.com", "Nombre completo");
        $mail->Subject = "Envío de email usando SMTP de Gmail";
        $mail->msgHTML("Hola hola, esto es el cuerpo del mensaje!");
//indico destinatario
        $address = "easymovereto3@gmail.com";
        $mail->addAddress($address, "Nire hotmail");
        if (!$mail->send()) {
            echo "Error al enviar: " . $mail->ErrorInfo;
        } else {
            echo "Mensaje enviado!";
        }
        ?>