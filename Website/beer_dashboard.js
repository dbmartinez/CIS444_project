var canPrice = 4.50;
var sixPackPrice = 24.75;
var taxRate = 1.0775;

function calcFrank() {
	var qty = document.getElementById("FP").value;
	var radios = document.getElementsByName("FrankPorterRadio");
	var beerName = "Frank Porter"
	
	if (radios[0].checked) {
		var total = qty * canPrice * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " can(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * sixPackPrice * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " six pack(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
}

function calcKoby() {
	var qty = document.getElementById("KT").value;
	var radios = document.getElementsByName("KobyTripelRadio");
	var beerName = "Koby Tripel"
	
	if (radios[0].checked) {
		var total = qty * canPrice * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " can(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * sixPackPrice * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " six pack(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
}

function calcLuffy() {
	var qty = document.getElementById("LPA").value;
	var radios = document.getElementsByName("LuffyPaleAleRadio");
	var beerName = "Luffy Pale Ale"
	
	if (radios[0].checked) {
		var total = qty * canPrice * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " can(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * sixPackPrice * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " six pack(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
}

function calcNami() {
	var qty = document.getElementById("NSS").value;
	var radios = document.getElementsByName("NamiS&SPilsnerRadio");
	var beerName = "Nami S&S Pilsner"
	
	if (radios[0].checked) {
		var total = qty * canPrice * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " can(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * sixPackPrice * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " six pack(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
}

function calcRobin() {
	var qty = document.getElementById("RML").value;
	var radios = document.getElementsByName("RobinMexicanLagerRadio");
	var beerName = "Robin Mexican Lager"
	
	if (radios[0].checked) {
		var total = qty * canPrice * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " can(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * sixPackPrice * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " six pack(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
}

function calcSanji() {
	var qty = document.getElementById("SPL").value;
	var radios = document.getElementsByName("SanjiPaleLagerRadio");
	var beerName = "Sanji Pale Lager"
	
	if (radios[0].checked) {
		var total = qty * canPrice * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " can(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * sixPackPrice * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " six pack(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
}

function calcTony() {
	var qty = document.getElementById("TC").value;
	var radios = document.getElementsByName("TonyChopperIPARadio");
	var beerName = "Tony Chopper IPA"
	
	if (radios[0].checked) {
		var total = qty * canPrice * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " can(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * sixPackPrice * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " six pack(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
}

function calcUssop() {
	var qty = document.getElementById("US").value;
	var radios = document.getElementsByName("UssopStoutRadio");
	var beerName = "Ussop Stout"
	
	if (radios[0].checked) {
		var total = qty * canPrice * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " can(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * sixPackPrice * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " six pack(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
}

function calcZoro() {
	var qty = document.getElementById("ZD").value;
	var radios = document.getElementsByName("ZoroDoubleIPARadio");
	var beerName = "Zoro Double IPA"
	
	if (radios[0].checked) {
		var total = qty * canPrice * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " can(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * sixPackPrice * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " six pack(s) of " + beerName + " to cart (amount added $" + total + ").");
	}
}
