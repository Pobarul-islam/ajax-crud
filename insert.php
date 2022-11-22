<?php 

include('db.php');
//print_r($_POST);

$name=$_POST['name'];
$email=$_POST['email'];
$password=$_POST['password'];

$sql="INSERT into students(name, email, password) value('$name', '$email', '$password')";

if(mysqli_query($con, $sql)){
    echo "Successfully added";
}else{
    echo "Not added";
}

?>