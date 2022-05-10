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
          <li><a href="food_dashboard.html">Food</a></li>
          <li><a href="beer_dashboard.html">Beer</a></li>
          <li><a href="shop_dashboard.html">Shop</a></li>
          <li><a href="contact_dashboard.html">Contact</a></li>
          <li><a href="about_dashboard.html">About Us</a></li>
        </ul>
      </div>
    </div>
  
<h1>Sign In</h1>

<? php 

		// connect to MYSQL
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
      print "<p>Login was successful!</p>"
      exit;
    }
		
		mysqli_close("localhost", "group_4", "group_4");
	?>

  <footer>
    <img class="image1" src="LuffyJollyRoger.jpeg" alt="Jolly Roger" width="150" height="150">
    <img class="image2" src="LuffyJollyRoger.jpeg" alt="Jolly Roger" width="150" height="150">

    <p class="lightblue">
      One Piece Brewery<br>
      333 S Twin Oaks Valley Rd,<br>
      San Marcos, CA 92096<br>

      Tel: 760-867-5309<br><br>

      <strong>Hours of Operaton:</strong><br>
      Sunday - Thursday : 11am-9pm<br>
      Friday & Saturday: 11am-11pm<br><br>

      Copyright ©2022 by One Piece Brewery - All Rights Reserved
      <br>Powered by Awesomeness
    </p>

  </footer>
</body>
</html>
