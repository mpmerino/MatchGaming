<?php

	// Database connection
	require_once 'actionConnectDb.php';
	$started = session_start();

	$userName = $_POST['userName'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$hashed_password = password_hash($password, PASSWORD_DEFAULT);

	if(mysqli_num_rows(mysqli_query($conn, "SELECT email FROM users where email = '$email' ")) > 0){
		$_SESSION['emailalreadyexists'] = "This email is already registered in our database!";
		header("Location: signup.php");
	} else {
		$stmt = $conn->prepare("INSERT into users(userName, email, password) values(?, ?, ?)");
		$stmt->bind_param("sss", $userName, $email, $hashed_password);
		$stmt->execute();
		$_SESSION['status'] = "Register successful! Please, login now";
		header("Location: login.php");
		$stmt->close();
	}

?>

