<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once '../PHPMailer/src/Exception.php';
require_once '../PHPMailer/src/SMTP.php';
require_once '../PHPMailer/src/PHPMailer.php';

$mail = new PHPMailer();
$mail->CharSet = 'UTF-8';

// Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;
$mail->SMTPSecure = 'ssl';

$mail->Host = 'smtp.yandex.ru';
$mail->Port = 465;
$mail->Username = 'email_username';
$mail->Password = 'email_password';

$mail->setFrom('email_username@yandex.ru', 'Московский центр займов');
$mail->addAddress('email_username@yandex.ru', 'Московский центр займов');

$mail->isHTML(true);
$mail->Subject = 'Форма обратной связи';

$c = true;

foreach ( $_POST as $key => $value ) {
    if ( $value != "" ) {
        $message .= "
        " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
            <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
            <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
        </tr>
        ";
    }
}
$mail->Body = "<table style='width: 100%;'>$message</table>";

if ($mail->send()) {
    echo 'Письмо отправлено!';
} else {
    echo 'Ошибка: ' . $mail->ErrorInfo;
}
