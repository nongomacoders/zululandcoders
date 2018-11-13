<?php
include 'db.php';
$sql="select * from posts";
$stmt=$db->query($sql);

while($row=$stmt->fetchArray()){
    echo "<div class= 'card'>";
    echo "<div class='title-big'>{$row['posttitle']}</div>";
    echo "<div class='title-medium'>{$row['username']}</div>";
    echo "<p>{$row['postbody']}</p>";
    echo "<p class='pdate'> {$row['postdate']}</p>";
    echo "</div>";
    echo "<br>";
}


