<?php
/********************************************************************************
* This script is brought to you by Vasplus Programming Blog to whom all copyrights are reserved.
* Website: www.vasplus.info
* Email: info@vasplus.info
* Do not remove this information from the top of this code.
*********************************************************************************/


ini_set('error_reporting', E_NONE);

//Sender's information and message

//$formatMessage = nl2br($vpb_message_body);



//Change this field and put in your email address as the receiver of every message that will be sent
$receivers_email_addresses = array('kumarsammy691@gmail.com'); //'firstemail@server.com','secondemail@server.com' and so on or just use on email address alone as the receiver who is also regards as the administrator


$fullname = strip_tags($_POST["name"]);
$textmessage = strip_tags($_POST["message"]);
$email = strip_tags($_POST["email"]);


// BEGINNING OF MESSAGE 
for($i = 0; $i < count($receivers_email_addresses); $i++)
{
$message = <<<EOF

  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml">
   <head>
   <title>Contact Form Mailer</title>
   </head>
      <body>
	 <table bgcolor="#F9F9F9" align="left" cellpadding="6" cellspacing="6" width="100%" border="0">
     <tr>
    <td valign="top" colspan="2">
            <p><font style='font-family:Verdana, Geneva, sans-serif; font-size:12px; color:black;'>
			<br>Dear Administrator,<br><br><br />
			
			The client whose detail is shown below has sent you this message from my Web site:<br><br><br>
			
			Fullname: $fullname<br><br>			
			Email Address:	$email<br><br>
            Message: $textmessage<br><br>
	
			Thank You!<br><br>
        
		</font></p>	
			
          </td>
  </tr>
  <tr>
  <td colspan="2" align="center">
  <table height="40" width="100%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#F6F6F6" style="height:30;padding:0px;border:1px solid #EAEAEA;">
  <tr>
    <td></td>
  </tr>
</table>
</td>
</tr>
</table>

      </body>
   </html>
EOF;












"Contact Person Name - ".strip_tags($_POST["name"])."  Contact Person's Email - ".strip_tags($_POST["email"])."  <br> Message - ".strip_tags($_POST["message"])."<br><br>";
// END OF MESSAGE 


    //    THIS EMAIL IS THE SENDERS EMAIL ADDRESS
    $from = $fullname;
   
    //    SET A SUBJECT OF YOUR CHOICE
    $subject = "Mail from My Web Site";
            
    //    SET UP THE EMAIL HEADERS
    //    SET UP THE EMAIL HEADERS
    $headers = "From: $fullname <$from>\r\n";
    $headers   .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $headers   .= "Message-ID: <".time().rand(1,1000)."@".$_SERVER['SERVER_NAME'].">". "\r\n";  
   
   
   //   LETS SEND THE EMAIL
   if(mail($receivers_email_addresses[$i], $subject, $message, $headers))
   {
	   echo '<div style="display:block; text-align:center; font-weight:bold; margin-top:10%;">Hello '.$fullname.',<br><br>Your message has been sent successfully. We will get back to you as soon as possible.<br><br>Thanks. <br> <br> <br> <a href="index.html"  style="display:block; width:160px; margin:30px auto; background-color: #DD3C26; border-radius: 3px; padding: 10px 15px 10px 15px; line-height: 20px; cursor: pointer; color: #fff; ">  Go back to Home </a> </div>';
   }
   else
   {
	   echo '<div style="display:block; text-align:center; font-weight:bold; margin-top:10%;">Hey '.$fullname.',<br><br>Your message could not be sent at the moment due to connection problem. <br>Please try again or contact the site admin to report this error if the problem persist.<br><br>Thanks. <br> <br> <br> <a href="index.html"  style="display:block; width:160px; margin:30px auto; background-color: #DD3C26; border-radius: 3px; padding: 10px 15px 10px 15px; line-height: 20px; cursor: pointer; color: #fff; ">  Go back to Home </a> </div>';
   }
}
?>