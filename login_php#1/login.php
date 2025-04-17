<?php

session_start();

require_once __DIR__ . "/vendor/autoload.php";

use Database\Model\User;

$error = '';

if($_SERVER["REQUEST_METHOD"] === "POST") {

    $username = isset($_POST["login"]) ? trim($_POST["login"]) : "";

    try {
        User::login($username);
    } catch(Exception $err) {
        $error = $err->getMessage();
    }

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>

    <h1>Pagina de login</h1>

    <div class="container">
        <form method="post">
            <?php if(!empty($error)): ?>
                <p><?php echo $error; ?></p>
            <?php endif; ?>
            <label for="login">Username</label>
            <input type="text" name="login" id="login">
            <button type="submit">Logar</button>
        </form>
    </div>
    <div>
        <a href="register.php">Sign up</a>
    </div>

</body>
</html>