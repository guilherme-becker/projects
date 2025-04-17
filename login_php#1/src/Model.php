<?php

namespace Database;

class Model
{

    private array $values = [];

    public function __call($name, $arguments)
    {
        
        $method = substr($name, 0, 3);
        $fieldname = substr($name, 3);

        switch($method) {

            case "get":
                return $this->values[$fieldname];
            break;
            case "set":
                $this->values[$fieldname] = $arguments[0];
            break;

        }

    }

    public function setValues(array $data = [])
    {
        foreach($data as $key => $value) $this->{"set" . $key}($value);
    }

    public function getValues(): array
    {
        return $this->values;
    }

}