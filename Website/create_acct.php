<!DOCTYPE html>
<html>
<head>
  <html lang="en">
  <title>One Piece Brewery</title>
  <meta charset="utf-8">
  <link rel="main menu dahsboard stylesheet" href="mainpage.css">
</head>

<body>
  <div class="header">
      <img id="banner" src="WebsiteLogo.jpeg" alt="Monkey D. Luffy" width="1300" height="100">
    </div>

    <div id="menu-outer">
      <div class="table">
        <ul id="horizontal-list">
          <li><a href="main_menu_dashboard.html">Main Menu</a></li>
          <li><a href="beer_dashboard.html">Beer</a></li>
          <li><a href="food_dashboard.html">Food</a></li>
          <li><a href="contact_dashboard.html">Contact</a></li>
          <li><a href="about_dashboard.html">About Us</a></li>
          <li><a href="sso.html">Login</a></li>
        </ul>
      </div>
    </div>

  <h1>Create Account</h1>
  
  <? php 

		$db = mysqli_connect("localhost", "group_4", "group_4");
		
		if (mysqli_connect_errno()) {
			print "DB Connection failed: " . mysqli_connect_error();
			exit();
			}
		 
		mysqli_select_db("group_4");

		$id = rand(0,999999);
    $ccn = rand(0,999999);
		$fn = $_POST["fn"];
    $ln = $_POST["ln"];
    $email = $_POST["em"];
    $pw1 = $_POST["pwd1"];
    $pw2 = $_POST["pwd2"];

    if(pw1 != pw2){
      print "Error - Passwords must match!".mysqli_error();
      exit;
    }
    else{
  		
  		$query = "INSERT INTO contact 
                VALUES ($id,$ln,$fn,$email,$pwd1,'Twin Oaks dr. San Marcos, CA', $ccn, 1)";
  		
  		$result = mysqli_query($db,$query);
  		
  		if (!$result) {
  			 print "Error - Query failed" .
  			 mysqli_error();
  			 exit;
  		}
      else{
        print "<p>Account has been Created!</p>";
        exit;
      }
    }
		
		mysqli_close("localhost", "group_4", "group_4");
	?>
  </body>
</html>

