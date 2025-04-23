<?php

require_once __DIR__ . "/vendor/autoload.php";

use Todoapp\ToDo;

$todo = new ToDo();

$id = isset($_GET["id"]) ? (int) $_GET["id"] : 0;

if($id > 0) {
    
    $todo->edit($id);

    header("Location: /");

}