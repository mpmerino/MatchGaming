<?php

	// Database connection
    require_once 'actionConnectDb.php';
    $started = session_start();

    $email = $_POST['email'];
	$password = $_POST['password'];

    $stmt = $conn->prepare('select * from users where email = ?');
    $stmt->bind_param('s', $email);
    $stmt->execute();

    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if($user && password_verify($password, $user['password'])){
        $_SESSION['useremail'] = $email;
        $_SESSION['userId'] = $user['id'];
        $_SESSION['userName'] = $user['userName'];
        $_SESSION['login'] = "OK";
        header("Location: dashboard.php");
    } else{
        $_SESSION['failed'] = "Please, check your login information and try again.";
		header("Location: login.php");
    }

?>
