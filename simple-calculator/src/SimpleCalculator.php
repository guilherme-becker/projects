<?php

namespace Simplecalculator;

class SimpleCalculator
{

    private int $num1;
    private int $num2;
    private string $operator;

    public function __construct(int $num1, int $num2, string $operator)
    {
        $this->setNum1($num1);
        $this->setNum2($num2);
        $this->setOperator($operator);
    }

    public function setNum1(int $value)
    {
        if(!is_numeric($value)) throw new \Exception("Invalid input");

        $this->num1 = $value;
    }

    public function getNum1(): int
    {
        return $this->num1;
    }

    public function setNum2(int $value)
    {
        if(!is_numeric($value)) throw new \Exception("Invalid input");

        $this->num2 = $value;
    }

    public function getNum2(): int
    {
        return $this->num2;
    }

    public function setOperator(string $value)
    {
        if(empty($value)) throw new \Exception("invalid input");

        $this->operator = $value;
    }

    public function getOperator(): string
    {
        return $this->operator;
    }

    public function calculate(): float|string
    {

        switch($this->getOperator()) {

            case "add":
                return $this->getNum1() + $this->getNum2();
            break;
            case "subtract":
                return $this->getNum1() - $this->getNum2();
            break;
            case "divide":
                return $this->getNum1() / $this->getNum2();
            break;
            case "multiply":
                if($this->getNum2() === 0) throw new \DivisionByZeroError("Division by zero");
                return $this->getNum1() * $this->getNum2();
            break;
            default:
                return "Invalid operation";

        }

    }

}