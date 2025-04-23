<?php

namespace Todoapp;

class Page
{

    private object $loader;
    private object $twig;

    public function __construct($viewsDir = "/views/", $cacheDir = "/views-cache/")
    {
        
        $this->loader = new \Twig\Loader\FilesystemLoader($_SERVER["DOCUMENT_ROOT"] . $viewsDir);
        $this->twig = new \Twig\Environment($this->loader, [
            "debug" => true,
            "cache" => $_SERVER["DOCUMENT_ROOT"] . $cacheDir
        ]);

    }

    public function render(string $html, array $params = [])
    {
        return $this->twig->render($html, $params);
    }

}