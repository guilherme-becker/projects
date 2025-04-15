<?php

require_once __DIR__ . "/vendor/autoload.php";

use Currencyconverter\CurrencyConverter;

$res = "";

if($_SERVER["REQUEST_METHOD"] === "POST") {

    $convertCurr = isset($_POST["currencyconvert"]) ? $_POST["currencyconvert"] : "euro";
    $amount = isset($_POST["amount"]) ? (float) $_POST["amount"] : 0;

    $currencyConverter = new CurrencyConverter();

    $currencyConverter->setCurrency($convertCurr);

    $res = $currencyConverter->calculate($amount);

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Currency Converter</title>
</head>
<body>

    <div class="container">
        <div id="currency-converter">
            <h1>Currency Converter</h1>
            <form method="post">
                <label for="amount">Amount Real:</label>
                <input type="text" name="amount" id="amount">
                <select name="currencyconvert" id="currencyconvert">
                    <option value="dolar">Dolar</option>
                    <option value="euro">Euro</option>
                </select>
                <button type="submit">Convert</button>
            </form>
            <?php if(!empty($res)): ?>
            <div class="res">
                <p><?php echo $res; ?></p>
            </div>
            <?php endif; ?>
        </div>
    </div>

</body>
</html>