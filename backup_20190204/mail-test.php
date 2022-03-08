<?php 
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "no-reply@untanglepro.com";
    $to = "@gmail.com";
    $subject = "PHP Mail Test script";
    $message = "This is a test to check the PHP Mail functionality";
    $headers = "From:" . $from;
    $mailStatus = mail($to,$subject,$message, $headers);
    if($mailStatus){
    	echo "Test email sent";
	} else {
		echo "Test email not sent. Please check with administrator.";
	}
?>