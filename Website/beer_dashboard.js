var canPrice = 4.50;
var sixPackPrice = 24.75;
var taxRate = 1.0775;
var beerTotal = 0;
var qtyFrankCan = 0;
var qtyFrankSix = 0;
var qtyKobyCan = 0;
var qtyKobySix = 0;
var qtyLuffyCan = 0;
var qtyLuffySix = 0;
var qtyNamiCan = 0;
var qtyNamiSix = 0;
var qtyRobinCan = 0;
var qtyRobinSix = 0;
var qtySanjiCan = 0;
var qtySanjiSix = 0;
var qtyTonyCan = 0;
var qtyTonySix = 0;
var qtyUsoppCan = 0;
var qtyUsoppSix = 0;
var qtyZoroCan = 0;
var qtyZoroSix = 0;

function calcFrank() {
	var qty = document.getElementById("FP").value;
	var radios = document.getElementsByName("FrankPorterRadio");
	var beerName = "Frank Porter"
	
	if (radios[0].checked) {
		var total = qty * canPrice * taxRate;
		beerTotal += total;
		qtyFrankCan += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " can(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * sixPackPrice * taxRate;
		beerTotal += total;
		qtyFrankSix += (qty * 1)
		total = total.toFixed(2);
		alert("Added " + qty + " six pack(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	document.getElementById("FP").value = 0;
}

function calcKoby() {
	var qty = document.getElementById("KT").value;
	var radios = document.getElementsByName("KobyTripelRadio");
	var beerName = "Koby Tripel"
	
	if (radios[0].checked) {
		var total = qty * canPrice * taxRate;
		beerTotal += total;
		qtyKobyCan += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " can(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * sixPackPrice * taxRate;
		beerTotal += total;
		qtyKobySix += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " six pack(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	document.getElementById("KT").value = 0;
}

function calcLuffy() {
	var qty = document.getElementById("LPA").value;
	var radios = document.getElementsByName("LuffyPaleAleRadio");
	var beerName = "Luffy Pale Ale"
	
	if (radios[0].checked) {
		var total = qty * canPrice * taxRate;
		beerTotal += total;
		qtyLuffyCan += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " can(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * sixPackPrice * taxRate;
		beerTotal += total;
		qtyLuffySix += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " six pack(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	document.getElementById("LPA").value = 0;
}

function calcNami() {
	var qty = document.getElementById("NSS").value;
	var radios = document.getElementsByName("NamiS&SPilsnerRadio");
	var beerName = "Nami S&S Pilsner"
	
	if (radios[0].checked) {
		var total = qty * canPrice * taxRate;
		beerTotal += total;
		qtyNamiCan += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " can(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * sixPackPrice * taxRate;
		beerTotal += total;
		qtyNamiSix += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " six pack(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	document.getElementById("NSS").value = 0;
}

function calcRobin() {
	var qty = document.getElementById("RML").value;
	var radios = document.getElementsByName("RobinMexicanLagerRadio");
	var beerName = "Robin Mexican Lager"
	
	if (radios[0].checked) {
		var total = qty * canPrice * taxRate;
		beerTotal += total;
		qtyRobinCan += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " can(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * sixPackPrice * taxRate;
		beerTotal += total;
		qtyRobinSix += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " six pack(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	document.getElementById("RML").value = 0;
}

function calcSanji() {
	var qty = document.getElementById("SPL").value;
	var radios = document.getElementsByName("SanjiPaleLagerRadio");
	var beerName = "Sanji Pale Lager"
	
	if (radios[0].checked) {
		var total = qty * canPrice * taxRate;
		beerTotal += total;
		qtySanjiCan += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " can(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * sixPackPrice * taxRate;
		beerTotal += total;
		qtySanjiSix += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " six pack(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	document.getElementById("SPL").value = 0;
}

function calcTony() {
	var qty = document.getElementById("TC").value;
	var radios = document.getElementsByName("TonyChopperIPARadio");
	var beerName = "Tony Chopper IPA"
	
	if (radios[0].checked) {
		var total = qty * canPrice * taxRate;
		beerTotal += total;
		qtyTonyCan += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " can(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * sixPackPrice * taxRate;
		beerTotal += total;
		qtyTonySix += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " six pack(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	document.getElementById("TC").value = 0;
}

function calcUssop() {
	var qty = document.getElementById("US").value;
	var radios = document.getElementsByName("UssopStoutRadio");
	var beerName = "Ussop Stout"
	
	if (radios[0].checked) {
		var total = qty * canPrice * taxRate;
		beerTotal += total;
		qtyUsoppCan += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " can(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * sixPackPrice * taxRate;
		beerTotal += total;
		qtyUsoppSix += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " six pack(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	document.getElementById("US").value = 0;
}

function calcZoro() {
	var qty = document.getElementById("ZD").value;
	var radios = document.getElementsByName("ZoroDoubleIPARadio");
	var beerName = "Zoro Double IPA"
	
	if (radios[0].checked) {
		var total = qty * canPrice * taxRate;
		beerTotal += total;
		qtyZoroCan += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " can(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * sixPackPrice * taxRate;
		beerTotal += total;
		qtyZoroSix += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " six pack(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	document.getElementById("ZD").value = 0;
}

function calcTotal() {
	var beerTotalStr = beerTotal.toFixed(2);
	var orderSummary = "";
	
	if (qtyFrankCan > 0) {
		orderSummary += "Can(s) of Frank Porter: " + qtyFrankCan + "\n";
	}
	if (qtyFrankSix > 0) {
		orderSummary += "Six pack(s) of Frank Porter: " + qtyFrankSix + "\n";
	}

	if (qtyKobyCan > 0) {
		orderSummary += "Can(s) of Koby Tripel: " + qtyKobyCan + "\n";
	}
	if (qtyKobySix > 0) {
		orderSummary += "Six pack(s) of Koby Tripel: " + qtyKobySix + "\n";
	}

	if (qtyLuffyCan > 0) {
		orderSummary += "Can(s) of Luffy Pale Ale: " + qtyLuffyCan + "\n";
	}
	if (qtyLuffySix > 0) {
		orderSummary += "Six pack(s) of Luffy Pale Ale: " + qtyLuffySix + "\n";
	}

	if (qtyNamiCan > 0) {
		orderSummary += "Can(s) of Nami S&S Pilsner: " + qtyNamiCan + "\n";
	}
	if (qtyNamiSix > 0) {
		orderSummary += "Six pack(s) of Nami S&S Pilsner: " + qtyNamiSix + "\n";
	}

	if (qtyRobinCan > 0) {
		orderSummary += "Can(s) of Robin Mexican Lager: " + qtyRobinCan + "\n";
	}
	if (qtyRobinSix > 0) {
		orderSummary += "Six pack(s) of Robin Mexican Lager: " + qtyRobinSix + "\n";
	}

	if (qtySanjiCan > 0) {
		orderSummary += "Can(s) of Sanji Pale Lager: " + qtySanjiCan + "\n";
	}
	if (qtySanjiSix > 0) {
		orderSummary += "Six pack(s) of Sanji Pale Lager: " + qtySanjiSix + "\n";
	}

	if (qtyTonyCan > 0) {
		orderSummary += "Can(s) of Tony Chopper IPA: " + qtyTonyCan + "\n";
	}
	if (qtyTonySix > 0) {
		orderSummary += "Six pack(s) of Tony Chopper IPA: " + qtyTonySix + "\n";
	}

	if (qtyUsoppCan > 0) {
		orderSummary += "Can(s) of Usopp Stout: " + qtyUsoppCan + "\n";
	}
	if (qtyUsoppSix > 0) {
		orderSummary += "Six pack(s) of Usopp Stout: " + qtyUsoppSix + "\n";
	}

	if (qtyZoroCan > 0) {
		orderSummary += "Can(s) of Zoro Double IPA: " + qtyZoroCan + "\n";
	}
	if (qtyZoroSix > 0) {
		orderSummary += "Six pack(s) of Zoro Double IPA: " + qtyZoroSix + "\n";
	}
	
	alert("Your order has been submitted!\n\n" + "Items ordered:\n" + orderSummary + "\nYour total is: $" + beerTotalStr + "\n\nThank you!");
}
