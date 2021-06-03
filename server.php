<?php

    $uri = $_SERVER['REQUEST_URI'];
    $uri = trim($uri, '/');
    
    include 'question.php';
    
    if(isset($_GET['question'])){
        if($_GET['question']=='1'){
            $index = new Question();
            $index->index();
        }
    }
   
    
?>