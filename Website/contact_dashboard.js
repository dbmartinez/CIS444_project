// .js page for conact section
// check for errors in userinput

//Function to verify the validity of user input
function userInput()
{
	//Get the DOM addresses of the elements
    var firstN = document.getElementById("userFN");
    var lastN = document.getElementById("userLN");
    var userE = document.getElementById("useremail");
    var userS = document.getElementById("usersubject");
	var userM = document.getElementById("usercomments");    

	// check to see if user input is correct string
	if(firstN.value == "")
	{
		alert("Invalid input of your first name.");
		firstN.focus()
		return false;
	}

	else if(lastN.value == "")
	{
		alert("Invalid input of your last name.");
		lastN.focus()
		return false;
	}

	if(userE.value == "")
	{
		alert("Invalid input of email address");
		userE.focus()
		return false;
	}

	return true;
}