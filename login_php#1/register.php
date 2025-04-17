<?php

require_once __DIR__ . "/vendor/autoload.php";

if($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = trim(htmlspecialchars($_POST["name"]));
    $email = trim(htmlspecialchars($_POST["email"]));
    $login = trim(htmlspecialchars($_POST["login"]));

    \Database\Model\User::save($name, $email, $login);

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
</head>
<body>

    <h1>Register</h1>

    <div class="container">
        <div id="register">
            <form method="post">
                <label for="name">Name</label>
                <input type="text" name="name" id="name">
                <label for="email">Email</label>
                <input type="email" name="email" id="email">
                <label for="login">Username</label>
                <input type="text" name="login" id="login">
                <button type="submit">Sign up</button>
            </form>
        </div>
    </div>

</body>
</html>