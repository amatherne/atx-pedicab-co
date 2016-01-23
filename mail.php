<?php 
if(isset($_POST['submit'])){
    $to = "email@example.com"; // this is your Email address
    $full_name = $_POST['full_name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
	$message = $full_name . " " . $phone . "\n\n" . $_POST['message'];
	$subject = "Form submission";

    $headers = "From:" . $email;
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $full_name . ", we will contact you shortly!";
    }
?>
