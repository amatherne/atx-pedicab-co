<?php
require '../twilio-php-master/Services/Twilio.php';

// $fullName .= $_GET["full_name"];
$phone .= $_GET["phone"];
$destination .= $_GET["destination"];
$current_location .= $_GET["current_location"];

$body = array(
      // "fullName" => $_GET["full_name"],
      "phone"    => $_GET["phone_number"],
      "destination"    => $_GET["destination"],
      "currentLocation"    => $_GET["current_location"],
      "partySize"    => $_GET["no_people"]
    );

// set your AccountSid and AuthToken from www.twilio.com/user/account
$AccountSid = "ACe2023ac3014645dc4286a77398e53b6c";
$AuthToken = "726abc5938173fcd6806f161b978ab0e";

$client = new Services_Twilio($AccountSid, $AuthToken);

$messageToClient = $client->account->messages->create(array(
    "From" => "+19292266848",
    "To" => "+1" . $body["phone"],
    "Body" => "\r\n \r\n" . "\r\n Reservation for " . $body["fullName"] . " to " . $body["destination"] . " for your party of " . $body["partySize"] . " is complete!"
));

$messageToDispatcher = $client->account->messages->create(array(
    "From" => "+19292266848",
    "To" => "+15126441746",
    "Body" => "\r\n " . "\r\n Name: " . $body["fullName"] . "\r\n Phone: " . $body["phone"] . "\r\n Destination: " . $body["destination"] . "\r\n Current Location: " . $body["currentLocation"] . "\r\n Party Size: " . $body["partySize"]
));

?>