<?php 

include('db.php');
//print_r($_POST);

$id=$_POST['id'];
$name=$_POST['name'];
$email=$_POST['email'];
$password=$_POST['password'];

$sql="INSERT into students(id, name, email, password) value('$id', $name', '$email', '$password') ON Duplicate key update name='$name',email='$email', password='$password' ";

if(mysqli_query($con, $sql)){
    echo "Successfully added";
}else{
    echo "Not added";
}

?>
