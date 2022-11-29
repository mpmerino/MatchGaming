<?php

	$started = session_start();
  ?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" type="text/css" href="css/style.css" />
  <title>MatchGaming!</title>
  <script src="https://kit.fontawesome.com/09d46242b5.js" crossorigin="anonymous"></script>
</head>

<body class="flex-col">
  <main class="flex-col">
    <h1 class="flex-col">MatchGaming!</h1>

    <div class="panel flex-col">
      <div class="question-container" id="question">Question goes here.</div>
      <div class="option-container flex-col">
        <button class="option" onclick="" id="op1">option1</button>

        <button class="option" id="op2">option2</button>

        <button class="option" id="op3">option3</button>

        <button class="option" id="op4">option4</button>
      </div>
    </div>
    <a href="#" id="submit">Submit</a>
    <div id="gameCardWrapper">
      <button class="slide-arrow" id="slide-arrow-prev">&#8249;</button>
      <button class="slide-arrow" id="slide-arrow-next">&#8250;</button>
      <ul id="gameCard">
        <div id="liked"></div>
        <div id="disliked"></div>
        <div id="thanks">
          Thanks for visiting! <button>See more games</button><button>Send my list</button>
        </div>
      </ul>
      <div id="options">
        <i id="dislike" class="fa-solid fa-xmark"></i>
        <form name="likedGames" action="like.php">
          <input type="text" name="liked" /><button type="submit"><i id="like" class="fa-solid fa-heart"></i></button>
        </form>
      </div>
    </div>
    <script src="./scripts.js" type="module"></script>
  </main>
</body>

</html>