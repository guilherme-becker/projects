<?php

session_start();

require_once __DIR__ . "/vendor/autoload.php";

use Database\Model\User;

User::verifyLogin();

var_dump($_SESSION);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index page</title>
</head>
<body>

    <h1>Index</h1>

    <div>
        <a href="logout.php">Logout</a>
    </div>

</body>
</html>