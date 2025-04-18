<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit9007f53c1f048a39d81d0e4e1fcd139c
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInit9007f53c1f048a39d81d0e4e1fcd139c', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit9007f53c1f048a39d81d0e4e1fcd139c', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit9007f53c1f048a39d81d0e4e1fcd139c::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
