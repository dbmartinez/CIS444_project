<?php 
		$db = mysqli_connect("localhost", "group_4", "group_4");
		
		if (mysqli_connect_errno()) {
			print "DB Connection failed: " . mysqli_connect_error();
			exit();
			}
		
		mysqli_select_db("group_4");
		
		$email = $_POST["un"];
    $password = $_POST["pwd"];
		
		$query = "SELECT * FROM group4.contact WHERE $email = Email AND $password = password";
		
		$result = mysqli_query($db,$query);
		
		if (!$result) {
			 print "Error - incorrect Username/Password. If new user go back and click create account or login as guest" .
			 mysqli_error();
			 exit;
		}
    else{
      print "Login was successful!"
      exit;
    }
		
		mysqli_close("localhost", "riche014", "riche014");
	?>
  