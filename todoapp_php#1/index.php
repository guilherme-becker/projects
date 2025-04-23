<?php

require_once __DIR__ . "/vendor/autoload.php";

use Todoapp\ToDo;
use Todoapp\Page;

$page = new Page();
$toDo = new ToDo();

$error = isset($_GET["error"]) ? $_GET["error"] : "";

echo $page->render("index.twig", [
    "title" => "To do app",
    "list"  => $toDo->listAll(),
    "error" => $error
     ]);

?>