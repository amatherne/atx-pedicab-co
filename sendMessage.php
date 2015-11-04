<?php
require 'twilio-php-master/Services/Twilio.php';

// $fullName .= $_GET["full_name"];
// $phone .= $_GET["phone"];
// $destination .= $_GET["destination"];
// $current_location .= $_GET["current_location"];

$body = array(
      "fullName" => $_GET["full_name"],
      "phone"    => $_GET["phone"],
      "destination"    => $_GET["destination"],
      "currentLocation"    => $_GET["current_location"],
      "partySize"    => $_GET["party_size"],
      "time" =>   $_GET["time"]
    );

// set your AccountSid and AuthToken from www.twilio.com/user/account
$AccountSid = "ACe2023ac3014645dc4286a77398e53b6c";
$AuthToken = "726abc5938173fcd6806f161b978ab0e";

$client = new Services_Twilio($AccountSid, $AuthToken);

if($body["time"] == "" || is_null($body["time"])) {
  $body["time"] = "NOW";
}

$messageToClient = $client->account->messages->create(array(
    "From" => "+19292266848",
    "To" => "+1" . $body["phone"],
    "Body" => "\r\n \r\n" . "\r\n Reservation for " . $body["fullName"] . " to " . $body["destination"] . " for your party of " . $body["partySize"] . " is complete!"
));

$messageToDispatcher = $client->account->messages->create(array(
    "From" => "+19292266848",
    "To" => "+12259376324",
    "Body" => "\r\n " . "\r\n Name: " . $body["fullName"] . "\r\n Phone: " . $body["phone"] . "\r\n Current Loc: " . $body["currentLocation"] . "\r\n Party Size: " . $body["partySize"] . "\r\n Time: " . $body["time"] . "\r\n Destination: " . $body["destination"] 
));

?>

<!doctype html>

<html>
  <body>
    <div class="confirmed">
      <h2>A driver has been notified!</h2>
      <div class="divider"></div>
      <h3>Hold on to ya butts!</h3>
    </div>
  </body>
</html>