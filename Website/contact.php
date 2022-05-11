<!DOCTYPE html>
<html lang="en">
<head>
<title>One Piece Brewery</title>
<meta charset = "utf-8">
<link rel="contact dashboard stylesheet" href="mainpage.css">
</head>
<script src="contact_dashboard.js"> </script>

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
          <li><a href="shop_dashboard.html">Shop</a></li>
          <li><a href="about_dashboard.html">About Us</a></li>
          <li><a href="sso.html">Login</a></li>
        </ul>
      </div>
    </div>

    <h1>CONTACT US</h1>
    <form action="contact_dashboard.php" method="post">
      <p>
        FIND US HERE
        <br>Address: 333 S Twin Oaks Valley Rd, 
        <br>San Marcos, CA 92096
        <br>Phone: 760-867-5309
        <br><br>Hours of Operation:
        <br>
          Sunday - Thursday: 11am-9pm
          <br>
          Friday & Saturday: 11am-11pm
        </p>

        <div>
          <center>
          <iframe id="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.130519506854!2d-117.16192368484039!3d33.131935473110886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf54d308252e7%3A0x84239e8d14da35df!2sCSUSM%20Clarke%20Field%20House!5e0!3m2!1sen!2sus!4v1647497500601!5m2!1sen!2sus"
            width="400" height="300" style="border: 10px;;" allowfullscreen="" loading="lazy"></iframe></center>
        </div>

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
    </form>

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
