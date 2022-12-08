<?php

    define("hostDb", "localhost");
    define("userDb", "root");
    define("passDb", "Irisheyes@2021");
    define("nameDb", "matchgaming");

    // define("hostDb", "https://server173.web-hosting.com/");
    // define("userDb", "myapteqt");
    // define("passDb", "M4tchG@m1ng");
    // define("nameDb", "myapteqt_matchgaming");

    $conn = new mysqli(
        constant("hostDb"),
        constant("userDb"),
        constant("passDb"),
        constant("nameDb")
    );

?>


