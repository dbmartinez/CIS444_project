
    
function calculateTotal(){
	
  	var qtyCz = document.getElementById("cz").value;
  	var qtyMug = document.getElementById("mug").value; 
  	var qtyHd = document.getElementById("hd").value; 
    var qtyTs = document.getElementById("ts").value;
    var qtyHat = document.getElementById("hat").value; 
  
	var taxRate = .0775;
	var priceCz = 8.89;
	var priceMug = 12.69;
	var priceHd = 35.49;
  var priceTs = 25.49;
  var priceHat = 25.49;

  
  
	var total = (qtyCz*priceCz) + (qtyMug*priceMug) + (qtyHd*priceHd) + (qtyTs*priceTs) + (qtyHat*priceHat);
		total += (total * taxRate);
		total = Math.round(total * 100) / 100;
  
   
	
	
	alert("Cart Checkout Summary:\n\n" + 
        "Coozie (qty): " + qtyCz + "\n" +
        "Mug (qty): " + qtyMug + "\n" +
        "Hoodie (qty): " + qtyHd + "\n" +
        "T-Shirt (qty): " + qtyTs + "\n" +
        "Hat (qty): " + qtyHat + "\n" +
        
        "\n\nYour Total cost with tax is $"+ total + "\n\n" + "thank you for shopping with One Piece Brewery\n\n" ); 
	return false;
}

function addCz(){
  
  var qtyCz = document.getElementById("cz").value;
  var priceCz = 8.89;
  var totCz = (priceCz * qtyCz);
  
	alert(qtyCz + " coozie(s) in cart\n" + "Price: $" + totCz );
  
	return false;
}

function addMug(){
  
  var qtyMug = document.getElementById("mug").value;
  var priceMug = 12.69;
  var totMug = (priceMug*qtyMug);
  
	alert(qtyMug + " mug(s) in cart\n" + "Price: $" +totMug );
  
	return false;
}

function addHd(){
  
  var qtyHd = document.getElementById("hd").value;
  var priceHd = 35.49;
  var totHd = (priceHd*qtyHd);
  
	alert(qtyHd + " hoodie(s) in cart\n" + "Price: $" +totHd );
  
	return false;
}

function addTs(){
  
  var qtyTs = document.getElementById("ts").value;
  var priceTs = 25.49;
  var totTs = (priceTs*qtyTs);
  
	alert(qtyTs + " t-shirt(s) in cart\n" + "Price: $" +totTs );
  
	return false;
}

function addHat(){
  
  var qtyHat = document.getElementById("hat").value;
  var priceHat = 25.49;
  var totHat = (priceHat*qtyHat);
  
	alert(qtyHat + " hat(s) in cart \n" + "Price: $" +totHat );
  
	return false;
}


 
