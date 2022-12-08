<?php $started = session_start(); ?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>MatchGaming!</title>
    <?php include('head.inc.php');?>
  </head>

  <body class="flex-col flex-center">
    <header><nav>
    <?php
    if (isset($_SESSION['login']) && $_SESSION['login'] == "OK") {
    echo '<a href="dashboard.php">My dashboard</a> · <a href="actionLogout.php">Log out</a>';
} else {
    echo '<a href="signup.php">Sign up</a> · <a href="login.php">Login</a>';}
    ?>
    </nav></header>
    <main class="flex-col flex-center homepage">
      <h1>MatchGaming!</h1>

      <div id="home-cont" class="flex-col flex-center">
        <h2>Hey!</h2>
        <p>Do you feel that your life is <strong>incomplete</strong>?</p>
        <p>
          That there is something that you always wanted and never had, but you
          aren't sure what exactly that something is? Is everything dark, and
          sad, and senseless!?
          <span id="therapy">Well, then go to therapy.</span>
        </p>
        <p>
          Or much better, try with MatchGaming! We are here to match you with
          the game of your life.
        </p>
      </div>
      <button id="lets-go"><a href="test.php">Let's go</a></button>
    </main>
  </body>
</html>
