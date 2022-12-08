<?php
$started = session_start();

if (isset($_SESSION['login']) && $_SESSION['login'] == "OK") {
    header("Location: index.php");
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <title>MatchGaming! Login</title>
  <?php include('head.inc.php');?>
</head>

<body class="flex-col flex-center">
   <header><h1>MatchGaming!</h1><nav><nav><a href="index.php">Home</a> · <a href="signup.php">Sign Up</a></nav> </header>

  <main>

<?php
if(isset($_SESSION['status'])){
  echo '<p id="registerSuccessful">';
  echo $_SESSION['status'];
  echo '</p>';
  unset($_SESSION['status']);
}
?>

    <h1 class="text-center">Login</h1>

    <div class="form-container">
      <form action="actionLogin.php" method="post" class="flex-center flex-col" id="form">

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
          <div class="formInput"><input type="password" class="form-control" id="password" name="password">
          <i class="fa-solid fa-circle-xmark"></i>
        </div>

          <span id="passwordError" class="formError">Please, insert a valid password</span>

    </div>

        <?php
          if(isset($_SESSION['failed'])){
            echo '<p id="registerUnsuccessful">';
            echo $_SESSION['failed'];
            echo '</p>';
            unset($_SESSION['failed']);
          }
        ?>

        <p id="warnings" class="warnings"><i class="fa-solid fa-triangle-exclamation"></i> Please, make sure all fields are filled properly.</p>


        <button id="submitForm" class="option">Submit</button>

      </form>
    </div>
    <script src="js/loginValidation.js"></script>
</main>
</body>

</html>