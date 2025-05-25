<?php
session_start(); // Запуск сессии
if($_SESSION['user_id'] != 1){
            header("Location: authorization.php"); // Перенаправление на защищенную страницу
        exit;
}
include $_SERVER['DOCUMENT_ROOT']."/get/include.php";

$sql = "SELECT * FROM article ";

$result = mysqli_query($link, $sql);


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex">
    <title>Document</title>
    <style>
        *{
            margin:0;
            padding:0;
        }
        section{
            width:100%;
            display:grid;
            justify-content:space-between;
            align-items:center;
            grid-template-columns: repeat(3, 1fr);
            justify-items:center;
        }
    </style>
    <link rel="icon" href="img/js.svg" type="image/svg+xml">
</head>
<body>
    <main>
        <article>
    <h1>Updating</h1>

<?php
while ($row = mysqli_fetch_array($result)) {
    echo "<section>";
    echo "id: " . ($row['id']) ." Post: " . "<a href=/blozhik/". $row['url'].">" . $row['title'] . "</a>". "<a href='/update-oost.php?id=". ($row['id']) . " '  style='font-size:33px;'>📝</a>" . "<br>";
    echo "</section>";
}
?>
        </article>
    </main>
</body>
</html>