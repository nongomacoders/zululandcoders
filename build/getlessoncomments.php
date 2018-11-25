<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include './db.php';
$lesson=$_POST["lesson"];
$rows=array();
$sql = <<<EOD
select * from lessoncomments where lesson=:lesson
EOD;
$stmt=$db->prepare($sql);
$stmt->bindParam(':lesson', $lesson);
try {
    $stmt->execute();
    while ($rows=$stmt->fetchArray()) {        
    }
    $rows["success"]=true;
    echo json_encode($rows);
} catch (Exception $e) {
    $file = 'sqlite_errors.txt';
    file_put_contents($file, $e, FILE_APPEND | LOCK_EX);
    echo json_encode(array("success"=>false));
}
