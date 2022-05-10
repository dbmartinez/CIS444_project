< ?php 
		$db = mysqli_connect("localhost", "group_4", "group_4");
		
		if (mysqli_connect_errno()) {
			print "DB Connection failed: " . mysqli_connect_error();
			exit();
			}
		 
		mysqli_select_db("group_4");
		
		$fn = $_POST["userFN"];
    $ln = $_POST["userLN"];
    $email = $_POST["useremail"];
    $sub = $_POST["usersubject"];
    $mes = $_POST["usercomments"];
		
		$query = "INSERT INTO contact 
              VALUES ($fn,$ln,$email,$sub,$mes)";
		
		$result = mysqli_query($db,$query);
		
		if (!$result) {
			 print "Error - Query failed" .
			 mysqli_error();
			 exit;
		}
    else{
      print "<p>Thank you for contacting One Piece Brewery!</p>";
      exit;
    }
		
		mysqli_close("localhost", "group_4", "group_4");
	?>
