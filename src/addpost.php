<?php
 header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json; charset=UTF-8");
include './db.php';
date_default_timezone_set('Africa/Johannesburg');
$username=$_POST["username"];
$title=$_POST["title"];
$body=$_POST["body"];
$today = date("Y-m-d H:i:s");

$sql = <<<EOD
insert into posts(username,posttitle,postbody,postdate) values(:username,:title,:body,:today)
EOD;

$stmt=$db->prepare($sql);
$stmt->bindParam(':username', $username);
$stmt->bindParam(':title', $title);
$stmt->bindParam(':body', $body);
$stmt->bindParam(':today', $today);
try {
    $stmt->execute();
    echo json_encode(array("success"=>true));
}catch(Exception $e){
    $file = 'sqlite_errors.txt';
    file_put_contents($file, $e, FILE_APPEND | LOCK_EX);
    echo json_encode(array("success"=>false));
  
}


