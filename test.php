<?php $started = session_start(); ?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>MatchGaming!</title>
    <?php include('head.inc.php');?>
    <script src="js/ajaxLike.js"></script>
  </head>

  <body class="flex-col flex-center">
    <header><nav>
    <?php
    if (isset($_SESSION['login']) && $_SESSION['login'] == "OK") {
    echo '<a href="index.php">Home</a> · <a href="dashboard.php">My dashboard</a> · <a href="actionLogout.php">Log out</a>';
} else {
    echo '<a href="signup.php">Sign up</a> · <a href="login.php">Login</a>';}
    ?>
    </nav><h1>MatchGaming!</h1></header>
  <main class="flex-col flex-center">

    <div id="testContainer" class="flex-col flex-center show">
      <div class="question-container" id="question">Question goes here.</div>
      <div class="option-container flex-col flex-center">
        <button class="option" id="op1">option1</button>
        <button class="option" id="op2">option2</button>
        <button class="option" id="op3">option3</button>
        <button class="option" id="op4">option4</button>
      </div>
    </div>
    <a href="#" id="submitTest">Submit</a>
    <div id="gameCardWrapper">
      <ul id="liked"></ul>
      <ul id="disliked"></ul>
      <ul id="gameCard"></ul>
        <div id="thanks" class="flex-center flex-col">
        <span class="thanks">Thanks for visiting! </span><a href="#" class="moreBtn" id="seeMoreGames">See more games</a>
        </div>
        <div id="options">
        <div class="buttonContainer"><i id="dislike" class="fa-solid fa-xmark"></i></div>
        <button type="button" id="moreInfo" class="moreBtn">MORE INFO</button>
        <div class="buttonContainer">
          <form name="likedGames" method="post" id="likeForm" action="actionLike.php">
            <input type="text" name="liked" id="likeInput" style="display: none"><button type="submit" id="likeButton"><i id="like" class="fa-solid fa-heart"></i></button>
          </form>
        </div>
      </div>
    </div>
    <script src="js/scripts.js" type="module"></script>
  </main>
</body>

</html>