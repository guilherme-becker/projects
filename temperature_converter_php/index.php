<?php

require_once __DIR__ . "/vendor/autoload.php";

use Temperature\TemperatureConverter;

$res = 0;


if($_SERVER["REQUEST_METHOD"] === "POST") {
    
    $temperature = isset($_POST["temperature"]) ? (int) $_POST["temperature"] : 0;
    $type1 = $_POST["temptype1"];
    $type2 = $_POST["temptype2"];

    $temperatureConverter = new TemperatureConverter($type1, $temperature, $type2);
        
    $res = $temperatureConverter->getTemperature();

}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Temperature converter</title>
</head>
<body>

    <div class="container">
        <div id="temperature-converter">
            <h1>Temperature converter</h1>
            <form method="post">
                <label for="temptype1">Select first temperature type</label>
                <select name="temptype1" id="temptype1">
                    <option value="celsius">Celsius</option>
                    <option value="farenheit">Farenheit</option>
                    <option value="kelvin">Kelvin</option>
                </select>
                <input type="number" name="temperature" id="temperature">
                <label for="temptype2">Select second temperature type</label>
                <select name="temptype2" id="temptype2">
                    <option value="celsius">Celsius</option>
                    <option value="farenheit">Farenheit</option>
                    <option value="kelvin">Kelvin</option>
                </select>
                <button type="submit">Convert</button>
            </form>
            <?php if($res): ?>
            <div class="res">
                <p><?php echo $res; ?></p>
            </div>
            <?php endif; ?>
        </div>
    </div>

</body>
</html>