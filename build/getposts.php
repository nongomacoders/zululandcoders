<?php
include 'db.php';
$sql="select * from posts";
$stmt=$db->query($sql);

while($row=$stmt->fetchArray()){
    $shortpostdate=substr($row['postdate'],0,10);
    echo "<div class='row'>";
    echo "<div class='col s12 m6'>";
    echo "<div class= 'card blue-grey darken-1'>";
    echo "<div class='card-content white-text'>";
    echo "<div class='card-title'>{$row['posttitle']}</div>";   
    echo "<p>{$row['postbody']}</p>";
    echo "<div class='card-action'>";
    echo "<div class='orange-text'> by {$row['username']} at {$shortpostdate}</div>";   
    echo "</div>";
    echo "</div>";
    echo "</div>";
    echo "</div>";
    echo "</div>";
    echo "<br>";
}


