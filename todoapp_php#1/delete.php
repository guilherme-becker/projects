<?php

require_once __DIR__ . "/vendor/autoload.php";

use Todoapp\ToDo;

$id = isset($_GET["id"]) ? (int) $_GET["id"] : 0;

$todo = new ToDo();

if($id > 0) {

    $todo->delete($id);

    header("Location: /");

}