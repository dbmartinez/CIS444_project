// .js page for conact section
// check for errors in userinput

//Function to verify the validity of user input

	//Get the DOM addresses of the elements
    var firstN = document.getElementById("userFN");
    var lastN = document.getElementById("userLN");
    var userE = document.getElementById("useremail");
    var userS = document.getElementById("usersubject");
    var userM = document.getElementById("usercomments");    
function FNuserInput()
{
	var lettercheck = /^[0-9]+$/;
	var firstN = document.getElementById("userFN");
	// check to see if user input is correct string
	if(firstN.value == "")
	{
		alert("Invalid input of your first name.");
		firstN.focus()
		return false;
	}
	if(firstN.value.match(lettercheck))
	{
		alert("Invalid input of your first name.");
		firstN.focus()
		return false;
	}
}
function LNuserInput()
{	
	var lettercheck = /^[0-9]+$/;
    var lastN = document.getElementById("userLN");
	if(lastN.value == "")
	{
		alert("Invalid input of your last name.");
		lastN.focus()
		return false;
	}
	if(lastN.value.match(lettercheck))
	{
		alert("Invalid input of your last name.");
		lastN.focus()
		return false;
	}
}
function EMuserInput()
{
    var userE = document.getElementById("useremail");
	var atpos = userE.value.indexOf("@");
	var dotpos = userE.value.lastIndexOf(".");
	if(userE.value == "")
	{
		alert("Invalid input of email address");
		userE.focus()
		return false;
	}
	
	//var x = document.forms["myForm"]["email"].value;
	
	if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userE.value.length) {
		alert("Not a valid e-mail address");
		userE.focus()
		return false;
	}
}
function SuserInput()
{
    var userS = document.getElementById("usersubject");
	if (userS.value == ""){
		alert("no input for your subject, its required")
		userS.focus()
		return false;
	}
}
function MuserInput()
{
    var userM = document.getElementById("usercomments");    
	if(userM.value== ""){
		alert("An input for your message is required")
		userM.focus()
		return false;
	}
	

	return true;
}
