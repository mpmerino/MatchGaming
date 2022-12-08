<?php
$started = session_start();

if (isset($_SESSION['login']) && $_SESSION['login'] == "OK") {
    header("Location: index.php");
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <title>MatchGaming! Sign up</title>
  <?php include('head.inc.php');?>
</head>

<body class="flex-col flex-center">

  <header><h1>MatchGaming!</h1><nav><nav><a href="index.php">Home</a> · <a href="login.php">Login</a></nav> </header>
  <main>

  <?php
    if(isset($_SESSION['emailalreadyexists'])){
      echo '<p id="registerUnsuccessful">';
      echo $_SESSION['emailalreadyexists'];
      echo '</p>';
      unset($_SESSION['emailalreadyexists']);
    }
  ?>

    <h1 class="text-center">Sign Up</h1>

    <div class="form-container">
      <form action="actionSignup.php" method="post" class="flex-center flex-col" id="form">

        <div class="form-group flex-center flex-col" id="userNameGroup">
          <label for="userName">Username</label>
          <div class="formInput">
            <input type="text" class="form-control" id="userName" name="userName">
            <i class="fa-solid fa-circle-xmark"></i>
          </div>
          <span id="userNameError" class="formError">Please, set a username with a minimum of 5 characters</span>
        </div>

        <div class="form-group flex-center flex-col" id="emailGroup">
          <label for="email">Email</label>
          <div class="formInput">
            <input type="text" class="form-control" id="email" name="email">
            <i class="fa-solid fa-circle-xmark"></i>
          </div>
          <span id="emailError" class="formError">Please, insert a valid email address</span>
        </div>

        <div class="form-group flex-center flex-col" id="passwordGroup">
          <label for="password">Password</label>
          <div class="formInput">
            <input type="password" class="form-control" id="password" name="password">
            <i class="fa-solid fa-circle-xmark"></i>
          </div>
          <span id="passwordError" class="formError">Please, insert a valid password (minimum of 7 characters, containing uppercase, lowercase and a number)</span>
        </div>

          <div class="form-group flex-center flex-col" id="password2Group">
          <label for="password2">Repeat password</label>
          <div class="formInput">
            <input type="password" class="form-control" id="password2" name="password2" >
            <i class="fa-solid fa-circle-xmark"></i>
          </div>
          <span id="passwordError" class="formError">Passwords must match</span>
        </div>

        <button id="submitForm" class="option">Submit</button>

        <p id="warnings" class="warnings"><i class="fa-solid fa-triangle-exclamation"></i> Please, make sure all fields are filled properly.</p>

      </form>
    </div>

<script src="js/signupValidation.js"></script>
</main>
</body>

</html>