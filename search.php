<?php 
include('db.php');

$name=$_POST['name'];

$sql="SELECT * FROM `students` WHERE LOWER(students.`name`) LIKE '%$name%' ";

$res = mysqli_query($con, $sql);

// print_r($res);

while($row = mysqli_fetch_assoc($res)){
    $data[]= $row;
}

echo json_encode($data);

?>