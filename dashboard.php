<?php
	// Database connection
    require_once 'actionConnectDb.php';
    $started = session_start();

    if (isset($_SESSION['login']) && $_SESSION['login'] == "OK") {

    $userId = $_SESSION['userId'];
    $userName = $_SESSION['userName'];

    $sql = "SELECT `gameId` from likes where userId = $userId";
    $result = $conn->query($sql);

} else {
    header("Location: index.php");
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>MatchGaming! Dashboard</title>
    <?php include('head.inc.php');?>
    <script src="js/ajaxRemoveLike.js"></script>
</head>

<body class="flex-col flex-center">
    <header><nav><a href="index.php">Home</a> · <a href="test.php">Test</a> · <a href="actionLogout.php">Log out</a></nav><h1>MatchGaming!</h1></header>
    <main class="container">
        <p class="text-center">Welcome to the Dashboard, <?php echo "$userName" ?>!</p>
        <h2>My list of games</h3>
        <section class="slider-wrapper">
            <ul id="likedGamesList" class="slides-container">
                <button class="slide-arrow" id="slide-arrow-prev">&#8249;</button>
                <button class="slide-arrow" id="slide-arrow-next">&#8250;</button>

                <?php
                    $userLiked = array();
                    if ($result->num_rows > 0){
                        while($row = $result->fetch_assoc()){
                         $userLiked[] = $row['gameId'];
                        }
                    } else {
                        echo "<li id='no-results'> <span>0 results here. Why don't you play the <a href='test.php'>test</a> and get to swipe some games?</span></li>";
                    }
                    $conn->close();
                ?>

            </ul>
        </section>

        <script type="text/javascript">

        let userLiked = JSON.parse('<?= json_encode($userLiked) ?>');
        // console.log(userLiked);
        const likedGamesList = document.getElementById("likedGamesList");
        for(i=0; i<userLiked.length; i++){
        let API_URL = `https://api.rawg.io/api/games/${userLiked[i]}?key=0184e37f47674da7b331ff365749c661`;
            fetch(`${API_URL}`)
            .then((res) => res.json())
            .then(res=>{
                console.log(res);
                likedGamesList.innerHTML += `<li class="likedGameCard slide" style="background-color: #${res.dominant_color}"><h3>${res.name}</h3><img src="${res.background_image}" class="gameImage"><p class="gameDescription">${res.description_raw}</p>
                <form method="post" action="actionRemove.php" class="removeBtnForm flex-col flex-center">
                <input type="text" name="liked" class="removeInput" value="${res.id}" style="display: none">
                <button type="submit" class="removeBtn">Remove</button></form></li>`;
            })
        }

        </script>

    </main>
    <script src="js/slider.js" type="module"></script>
</body>

</html>