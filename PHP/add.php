<?php
session_start(); // Запуск сессии
if($_SESSION['user_id'] != 1){
            header("Location: authorization.php"); // Перенаправление на защищенную страницу
        exit;
}
include $_SERVER['DOCUMENT_ROOT']."/get/include.php";
ini_set('display_errors', 1);
error_reporting(E_ALL);

mysqli_set_charset($link, "utf8");
header('Content-Type: text/html; charset=utf-8');


if(isset($_GET["title"])){
    $title = $_GET["title"];
}
if(isset($_GET["description"])){
    $description = $_GET["description"];
}
if(isset($_POST["text"])){
    $text = $_POST["text"];
}
if(isset($_POST["JSON"])){
    $json = $_POST["JSON"];
}
if(isset($_POST["autor"])){
    $autor = $_POST["autor"];
}
if(isset($_POST["js"])){
    $js = $_POST["js"];
}
if(isset($_POST["id"])){
    $id = $_POST["id"];
}else{
    echo " ELSE";
}


$title = mysqli_real_escape_string($link, $_GET["title"]);
echo "<br>";
$description = mysqli_real_escape_string($link, $_GET["description"]);
echo "<br>";
$text = mysqli_real_escape_string($link, $_GET["text"]);
echo "<br>";
$json = mysqli_real_escape_string($link, $_GET["JSON"]);
echo "<br>";
$autor = mysqli_real_escape_string($link, $_GET["autor"]);
echo "<br>";
$js = mysqli_real_escape_string($link, $_GET["js"]);

$sql = "INSERT INTO article (title, description,text,json,autor,js) VALUES ('$title', '$description','$text','$json','$autor','$js')";
if (mysqli_query($link, $sql)) {
    echo "Данные успешно добавлены";
} else{
    echo "Ошибка: "  . mysqli_error($link);
}
mysqli_close($link);
?>