<?php

namespace Todoapp\DB;

use Dotenv\Dotenv;

class Sql
{

    private object $dotenv;
    private object $conn;

    public function __construct()
    {
        
        $this->dotenv = Dotenv::createImmutable($_SERVER["DOCUMENT_ROOT"]);
        $this->dotenv->load();

        try {

            $this->conn = new \PDO(
                "mysql:host=" . $_ENV["DB_HOST"] . ";dbname=" . $_ENV["DB_DBNAME"],
                $_ENV["DB_USER"],
                $_ENV["DB_PASS"]
            );

        } catch(\PDOException $error) {

            echo $error->getMessage();
        
        }

    }

    public function select(string $query, array $params = []): array
    {

        $stmt = $this->conn->prepare($query);

        $this->setParams($stmt, $params);

        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);

    }

    private function setParams(object $stmt, array $params = [])
    {
        foreach($params as $key => $value) $this->setParam($stmt, $key, $value);
    }

    private function setParam(object $stmt, string $key, mixed $value)
    {
        $stmt->bindParam($key, $value);
    }

}