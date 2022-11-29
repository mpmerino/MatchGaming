<?php

	$started = session_start();

	$userId = $_SESSION['userId'];
    $like = $_POST['liked'];

	// Database connection
	$conn = new mysqli('localhost','root','Irisheyes@2021','matchgaming');
	if($conn->connect_error){
        echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
        $stmt = $conn->prepare("INSERT INTO likes(user_id, gameId) VALUES ($userId, $like)");
        $stmt->bind_param("ss", $userId, $like);
		$execval = $stmt->execute();
		$stmt->close();
		$conn->close();
}

?>