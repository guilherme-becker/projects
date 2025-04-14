<?php

require_once __DIR__ . "/vendor/autoload.php";

use Simplecalculator\SimpleCalculator;

$err;
$res;
$num1;
$num2;
$operator;

if($_SERVER["REQUEST_METHOD"] === "POST") {

    $num1 = isset($_POST["num1"]) ? (int) $_POST["num1"] : 0;
    $num2 = isset($_POST["num2"]) ? (int) $_POST["num2"] : 0;
    $operator = isset($_POST["operator"]) ? $_POST["operator"] : "";

    try {

        $calculator = new SimpleCalculator($num1, $num2, $operator);

        $res = $calculator->calculate();

    } catch(Exception $error) {

        $err = $error->getMessage();

    } catch(DivisionByZeroError $error) {
        $err = $error->getMessage();
    }

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="style.css">
    
    <title>Simple calculator</title>
</head>
<body>

    <div class="container">
        <div id="simple-calculator">
            <h1>Simple calculator</h1>
            <form method="post">
                <?php if(!empty($err)): ?>
                    <div class="error">
                        <p><?php echo $err; ?></p>
                    </div>                    
                <?php endif;?>
                <label for="num1">First number</label>
                <input type="number" name="num1" id="num1">
                <label for="operator">Operator</label>
                <select name="operator" id="operator">
                    <option value="add">Add</option>
                    <option value="subtract">Subtract</option>
                    <option value="divide">Divide</option>
                    <option value="multiply">Multiply</option>
                </select>
                <label for="num2">Second number</label>
                <input type="number" name="num2" id="num2">
                <button type="submit">Calculate</button>
            </form>
            <?php if(!empty($res)): ?>
                <p class="res"><?php echo $res; ?></p>
            <?php endif; ?>
        </div>
    </div>

</body>
</html>