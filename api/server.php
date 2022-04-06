<?php 

    // COLLEGO DB
    require __DIR__ . '/../data/db.php';

    header('Content-Type: application/json');

    echo json_encode($db);
    
?>