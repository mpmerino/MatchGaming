<?php

	// Database connection
    require_once 'actionConnectDb.php';
    $started = session_start();

	$userId = $_SESSION['userId'];
	$like = isset($_POST["liked"] ) ? $_POST["liked"]: '';

	$stmt = $conn->prepare("INSERT INTO likes(userId, gameId) VALUES (?,?)");
	$stmt->bind_param("ss", $userId, $like);
	$execval = $stmt->execute();
	$stmt->close();
	$conn->close();

?>