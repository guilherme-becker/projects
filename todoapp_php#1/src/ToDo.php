<?php

namespace Todoapp;

use Todoapp\DB\Sql;

class ToDo
{

    public function listAll(): array
    {
        $sql = new Sql();

        return $sql->select("SELECT * FROM tb_to_do");

    }

    public function save(string $todo)
    {

        if(empty($todo)) throw new \Exception("preencha o campo to do");

        $sql = new Sql();

        $sql->select("INSERT INTO tb_to_do (to_do) VALUES (:to_do)", [
            ":to_do" => $todo
        ]);

    }

    public function edit(int $id)
    {

        $sql = new Sql();

        $sql->select("UPDATE tb_to_do SET completed = :completed WHERE id = :id", [
            ":completed" => 1,
            ":id"        => $id
        ]);

    }

    public function delete(int $id)
    {

        $sql = new Sql();

        $sql->select("DELETE FROM tb_to_do WHERE id = :id", [
            ":id" => $id
        ]);

    }

}