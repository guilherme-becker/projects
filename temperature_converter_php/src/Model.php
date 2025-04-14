<?php

namespace Temperature;

class Model
{

    private array $values = [];

    public function __call($name, $arguments)
    {
        
        $method = substr($name, 0, 3);
        $fieldname = substr($name, 3);

        switch($method) {

            case "set":
                $this->values[$fieldname] = $arguments[0];
            break;
            case "get":
                return $this->values[$fieldname];
            break;

        }

    }

    public function setData(array $data)
    {
        foreach($data as $key => $value) $this->{"set" . $key}($value);
    }

    public function getData(): array
    {
        return $this->values;
    }

}