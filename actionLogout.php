<?php
session_start();
unset($_SESSION["userId"]);
unset($_SESSION["userName"]);
unset($_SESSION["email"]);
session_destroy();
header("Location:index.php");
?>