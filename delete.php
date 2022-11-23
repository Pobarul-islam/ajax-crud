<?php

include('db.php');

$id=$_POST['id'];

$sql="DELETE FROM students where id = '$id' ";

if(mysqli_query($con, $sql)){
    echo "Successfully Deleted";
}else{
    echo "Sorry! Not Deleted";
}

?>