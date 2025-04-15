<?php

namespace Currencyconverter;

class CurrencyConverter
{

    private array $opts = [
        "dolar" => 0.1703,
        "euro"  => 0.1509
    ];

    private float $currency;
    private string $name;

    public function setCurrency(string $currency)
    {

        $this->name = $currency;
        $this->currency = $this->opts[$currency];

    }

    public function getCurrency(): float
    {
        return $this->currency;
    }

    public function calculate(float $amount): string
    {

        return "Total: " . ($this->name === "euro" ? "£" : "$") . number_format($amount * $this->getCurrency(), 2, ",", ".");

    }

}