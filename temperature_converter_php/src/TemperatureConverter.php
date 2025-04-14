<?php

namespace Temperature;

use Temperature\Model;

class TemperatureConverter extends Model
{

    public function __construct(string $temptype1, float $temperature, string $temptype2)
    {
        
        $this->setData([
            "temptype1"   => $temptype1,
            "temperature" => $temperature,
            "temptype2"   => $temptype2
        ]);

    }

    public function getTemperature(): float
    {

        $data = $this->getData();

        $type1 = $data["temptype1"];
        $type2 = $data["temptype2"];
        $temperature = $data["temperature"];

        return $this->convert($type1, $type2, $temperature);

    }
    
    private function convert(string $type1, string $type2, float $temperature)
    {

        if($type1 === $type2) return $temperature;

        if($type1 === "celsius") {
            
            if($type2 === "farenheit") {
                return round($temperature * 9 / 5 + 32, 2);
            } else {
                return round($temperature + 273.15);
            }
        
        } elseif($type1 === "farenheit") {

            if($type2 === "celsius") {
                return round(($temperature - 32) * 5 / 9, 2);
            } else {
                return round(($temperature - 32) * 5 / 9 + 273.15, 2);
            }

        } else {

            if($type2 === "celsius") {
                return round($temperature - 273.15, 2);
            } else {
                return round(($temperature- 273.15) * 9 / 5 + 32, 2);
            }

        }

    }

}

?>