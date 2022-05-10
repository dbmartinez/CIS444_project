
    
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

function addItem(){
		alert("item(s) added/removed in cart");
	return false;
}


 