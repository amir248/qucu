<?php
session_start(); // Запуск сессии
$link=mysqli_connect("localhost","qucu","Gfhjkm123", "excellent");
    if ($link == false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
    }
    else {
        // print("Соединение установлено успешно");
    }
?>