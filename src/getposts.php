<?php

$db=new Sqlite3('blog.db3');
$db->exec('PRAGMA foreign_keys = ON;');
$db->busyTimeout(10000);
$db->enableExceptions(true);
$rows=array();
$sql="select rowid,* from posts order by postdate desc";
$stmt=$db->query($sql);

while ($row=$stmt->fetchArray()) {
    array_push($rows,$row);
    $shortpostdate=substr($row['postdate'], 0, 10);
    
}
$data=json_encode($rows);

echo $data;