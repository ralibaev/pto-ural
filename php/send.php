<?php

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$name = $_POST['user_name'];
$token = "1506262551:AAFfzt9USBN6vjvq4fC4g4JV_WWslzOBYzI";
$chat_id = "-1001220451904";
$arr = array(
  'Имя пользователя' => $name,
  'Телефон' => $phone,
);
foreach ($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
}
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
if ($sendToTelegram) {
  echo "Send";
} else {
  echo "No send";
}
?>
