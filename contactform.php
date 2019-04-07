<?php

if (isset($_POST['submit'])) { //if submitted
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];
    
    $mailTo = "jacoblite5@yahoo.com"
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;
    
    mail($mailTo, $subject, $txt, $headers); //three parameters above: mail to, subject, message
    header("Location: index.php?mailsend");
}

?>