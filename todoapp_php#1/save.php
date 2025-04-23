<?php

require_once __DIR__ . "/vendor/autoload.php";


use Todoapp\ToDo;


try {

    $todo = new ToDo();

    $todo->save($_POST["name"]);

    header("Location: /");

} catch(\Exception $err) {

    header("Location: /?error=" . $err->getMessage());

}