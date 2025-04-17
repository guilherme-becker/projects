<?php

namespace Database\Model;

use Database\Model;
use Database\DB\Sql;

class User extends Model
{

    const SESSION = "User";

    public static function listAll(): array
    {
        $sql = new Sql();

        return $sql->select("SELECT * FROM tb_user");

    }

    public static function verifyLogin()
    {
        if(!$_SESSION[User::SESSION]) header("Location: login.php");
    }

    public static function login(string $username)
    {

        $sql = new Sql();

        $user = $sql->select("SELECT * FROM tb_user WHERE login = :login", [
            ":login" => $username
        ]);

        if(count($user) <= 0) throw new \Exception("invalid username");

        $_SESSION[User::SESSION] = $user[0];

        header("Location: index.php");

    }

    public static function logout()
    {
        $_SESSION[User::SESSION] = null;
        
        header("Location: login.php");

    }

    public static function save(string $name, string $email, string $login)
    {

        $sql = new Sql();

        $sql->select("INSERT INTO tb_user (name, email, login) VALUES (:name, :email, :login)", [
            ":name"  => $name,
            ":email" => $email,
            ":login" => $login
        ]);

        header("Location: login.php");

    }

}