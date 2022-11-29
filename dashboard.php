<?php
$started = session_start();

    $email = $_SESSION['useremail'] ;
    $userId = $_SESSION['userId'];
    $userName = $_SESSION['userName'];
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dashboard</title>
    <link rel="stylesheet" href="/css/style.min.css" />
    <script defer src="/js/auth.js"></script>
    <script defer src="/init.js"></script>
</head>

<body>
    <div class="container">
        <h1 class="text-center">Welcome to the Dashboard, <?php echo "$userName" ?>! Your id is <?php echo "$userId"?></h1>

        <a href="test.php">Test</a>

        <h2>My list of games</h2>

        <p class="text-center"><a href="#" class="logout">Log Out</a></p>
    </div>
</body>

</html>