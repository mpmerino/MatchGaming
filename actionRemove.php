<?php

	// Database connection
    require_once 'actionConnectDb.php';
    $started = session_start();

	$userId = $_SESSION['userId'];
	$like = isset($_POST["liked"] ) ? $_POST["liked"]: '';

	$stmt = $conn->prepare("DELETE FROM likes WHERE userId = ? AND gameId = ?");
	$stmt->bind_param("ss", $userId, $like);
	$execval = $stmt->execute();
	$stmt->close();
	$conn->close();

?>