<?php

namespace Database\DB;

use Dotenv\Dotenv;
use PDOException;

class Sql
{

    private object $dotenv;

    private object $conn;

    public function __construct()
    {
        
        $this->dotenv = Dotenv::createImmutable($_SERVER["DOCUMENT_ROOT"]);
        $this->dotenv->load();
        
        try {
            
            $this->conn = new \PDO("mysql:host=" . $_ENV["DATABASE_HOST"] . ";dbname=" . $_ENV["DATABASE_DB"], $_ENV["DATABASE_USER"], $_ENV["DATABASE_PASSWORD"]);
        
        } catch(PDOException $error) {

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