<?php
require 'twilio-php-master/Services/Twilio.php';




$body = array(
      "fullName" => $_GET["full_name"],
      "phone"    => $_GET["phone"],
      "destination"    => $_GET["destination"],
      "currentLocation"    => $_GET["current_location"],
      "partySize"    => $_GET["party_size"],
      "time" =>   $_GET["time"]
    );
 
// set your AccountSid and AuthToken from www.twilio.com/user/account
$AccountSid = "ACda3fd5771ba41df60da703e30cb52752";
$AuthToken = "c5fcfb015f376026ec768037395e8f6e";

$client = new Services_Twilio($AccountSid, $AuthToken);

if($body["time"] == "" || is_null($body["time"])) {
  $body["time"] = "NOW";
}

if($body["destination"] == "" || is_null($body["destination"])) {
  $body["destination"] = "Somewhere Awesome";
}

$messageToClient = $client->account->messages->create(array(
    "From" => "+15126435879",
    "To" => "+1" . $body["phone"],
    "Body" => "\r\n \r\n" . "\r\n Reservation for " . $body["fullName"] . " to " . $body["destination"] . " for your party of " . $body["partySize"] . " is complete!"
));

$messageToDispatcher = $client->account->messages->create(array(
    "From" => "+15126435879",
    "To" => "+12259376324",
    "Body" => "\r\n " . "\r\n Name: " . $body["fullName"] . "\r\n Phone: " . $body["phone"] . "\r\n Current Loc: " . $body["currentLocation"] . "\r\n Party Size: " . $body["partySize"] . "\r\n Time: " . $body["time"] . "\r\n Destination: " . $body["destination"] 
));

?>

<!doctype html>

<html>
  <head>
    <link rel='stylesheet' type='text/css' href='css/style.css' />
  </head>
  <body>
    <div class="confirmed">
      <h2>A driver has been notified!</h2>
      <div class="divider"></div>
      <h3>Hold on to ya butts!</h3>

      <a href="http://www.atxpedicab.com"><button>Return to Home</button></a>
    </div>
<!--   </body>
</html> -->