<?php
$db=new Sqlite3('blog.db3');
$db->exec('PRAGMA foreign_keys = ON;');
$db->busyTimeout(10000);
$db->enableExceptions(true);

