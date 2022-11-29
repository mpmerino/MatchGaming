<?php
	// Database connection
$started = session_start();
echo "Session Started: " . ($started ? "YES" : "NO");

	$conn = new mysqli('localhost','root','Irisheyes@2021','matchgaming');
	if(!$conn){
		die("Connection Failed: ".mysqli_connect_error());
	}



    $email = $_POST['email'];
	$password = $_POST['password'];


    $query = mysqli_query($conn,"SELECT `id`, `userName`, `email`, `password` FROM users WHERE email = '".$email."' and password = '".$password."'");
    $nr = mysqli_num_rows($query);


    if($nr == 1){
        $row = $query->fetch_assoc();
        $_SESSION['useremail'] = $email;
        $_SESSION['userId'] = $row['id'];
        $_SESSION['userName'] = $row['userName'];
        header("Location: dashboard.php");
    }
    else if($nr == 0){
        echo "Please, check your username and password!";
    }

?>