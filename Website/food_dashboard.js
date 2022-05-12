var taxRate = 1.0775;
var foodTotal = 0;
var regOnion = 6.49;
var lgOnion = 10.29;
var regTots = 4.89;
var lgTots = 7.79;
var sixWings = 11.29;
var tenWings = 16.49;
var fifWings = 22.29;
var twenWings = 27.99;
var thirWings = 38.29;
var totalQtyAAB = 0;
var totalQtyBMC = 0;
var totalQtyBRCS = 0;
var totalQtyBRCW = 0;
var totalQtyCCS = 0;
var totalQtyCQ = 0;
var totalQtyCS = 0;
var totalQtyCNS = 0;
var totalQtyLOR = 0;
var totalQtyROR = 0;
var totalQtyST = 0;
var totalQtyLTT = 0;
var totalQtyRTT = 0;
var totalQtyUN = 0;
var totalQtySixWin = 0;
var totalQtyTenWin = 0;
var totalQtyFifWin = 0;
var totalQtyTwenWin = 0;
var totalQtyThirWin = 0;

function onlyTwoCheckBoxes() {
	var limitcheckbox = document.getElementById('limitCheckbox').getElementsByTagName("input");
	var limit = 2;
	for (var i = 0; i < limitcheckbox.length; i++) {
		limitcheckbox[i].onclick = function() {
			var checkedcount = 0;
				for (var i = 0; i < limitcheckbox.length; i++) {
				checkedcount += (limitcheckbox[i].checked) ? 1 : 0;
			}
			if (checkedcount > limit) {
				console.log("You can select a maximum of " + limit + " checkboxes.");
				alert("You can select a maximum of " + limit + " checkboxes.");
				this.checked = false;
			}
		}
	}
}

function addBurger() {
	var qty = document.getElementById("amB").value;
	var radios = document.getElementsByName("cChoice");
	var foodName = "All-American Burger";
	var cheese = "";
	var total = 13.49 * qty * taxRate;
	foodTotal += total;
	total = total.toFixed(2);
	totalQtyAAB += (qty * 1);

	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			cheese = radios[i].value;
        }
    }

	alert("Added " + qty + " order(s) of " + foodName + " with " + cheese + " to cart (amount added $" + total + ").");
}

function addMac() {
	var qty = document.getElementById("bMnC").value;
	var radios = document.getElementsByName("macSauce");
	var foodName = "Buffalo Mac & Cheese";
	var sauce = "";
	var total = 12.79 * qty * taxRate;
	foodTotal += total;
	total = total.toFixed(2);
	totalQtyBMC += (qty * 1);

	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			sauce = radios[i].value;
        }
	}
	alert("Added " + qty + " order(s) of " + foodName + " with " + sauce + " sauce to cart (amount added $" + total + ").");
}

function addBufChickSand() {
	var qty = document.getElementById("bRCS").value;
	var radios = document.getElementsByName("bufChickSauce");
	var foodName = "Buffalo Ranch Chicken Sandwich";
	var sauce = "";
	var total = 12.49 * qty * taxRate;
	foodTotal += total;
	total = total.toFixed(2);
	totalQtyBRCS += (qty * 1);

	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			sauce = radios[i].value;
		}
	}
	alert("Added " + qty + " order(s) of " + foodName + " with " + sauce + " sauce to cart (amount added $" + total + ").");
}

function addBufChickWrap() {
	var qty = document.getElementById("brcw").value;
	var radios = document.getElementsByName("wrapSauce");
	var foodName = "Buffalo Ranch Chicken Wrap";
	var sauce = "";
	var total = 11.99 * qty * taxRate;
	foodTotal += total;
	total = total.toFixed(2);
	totalQtyBRCW += (qty * 1);

	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			sauce = radios[i].value;
		}
	}
	alert("Added " + qty + " order(s) of " + foodName + " with " + sauce + " sauce to cart (amount added $" + total + ").");
}

function addQuesadilla() {
	var qty = document.getElementById("cq").value;
	var foodName = "Chicken Quesadilla";
	var total = 10.29 * qty * taxRate;
	foodTotal += total;
	total = total.toFixed(2);
	totalQtyCQ += (qty * 1);

	alert("Added " + qty + " order(s) of " + foodName + " to cart (amount added $" + total + ").");
}

function addChickSand() {
	var qty = document.getElementById("cs").value;
	var foodName = "Chicken Sandwich";
	var total = 7.99 * qty * taxRate;
	foodTotal += total;
	total = total.toFixed(2);
	totalQtyCS += (qty * 1);

	alert("Added " + qty + " order(s) of " + foodName + " to cart (amount added $" + total + ").");
}

function addSalad() {
	var qty = document.getElementById("ccs").value;
	var radios = document.getElementsByName("dressChoice");
	var foodName = "Chicken Caesar Salad";
	var dressing = "";
	var total = 11.99 * qty * taxRate;
	foodTotal += total;
	total = total.toFixed(2);
	totalQtyCCS += (qty * 1);

	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			dressing = radios[i].value;
		}
	}
	alert("Added " + qty + " order(s) of " + foodName + " with " + dressing + " to cart (amount added $" + total + ").");
}

function addChipsSalsa() {
	var qty = document.getElementById("cns").value;
	var foodName = "Chips & Salsa";
	var total = 5.79 * qty * taxRate;
	foodTotal += total;
	total = total.toFixed(2);
	totalQtyCNS += (qty * 1);

	alert("Added " + qty + " order(s) of " + foodName + " to cart (amount added $" + total + ").");
}

function calcOnionRings() {
	var qty = document.getElementById("or").value;
	var radios = document.getElementsByName("onionChoice");
	var dipRadios = document.getElementsByName("dipChoice");
	var foodName = "Onion Rings";
	var dip = "";

	for (var i = 0; i < dipRadios.length; i++) {
		if (dipRadios[i].checked) {
			dip = dipRadios[i].value;
		}
	}
	if (radios[0].checked) {
		var total = qty * lgOnion * taxRate;
		foodTotal += total;
		totalQtyLOR += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " order(s) of Large " + foodName + " with " + dip + " to cart (amount added $" + total + ").");
	}

	else {
		var total = qty * regOnion * taxRate;
		foodTotal += total;
		totalQtyROR += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " order(s) of Regular " + foodName + " with " + dip + " to cart (amount added $" + total + ").");
    }
}

function addTacos() {
	var qty = document.getElementById("st").value;
	var foodName = "Street Tacos";
	var total = 6.79 * qty * taxRate;
	foodTotal += total;
	total = total.toFixed(2);
	totalQtyST += (qty * 1);

	alert("Added " + qty + " order(s) of " + foodName + " to cart (amount added $" + total + ").");
}

function calcTots() {
	var qty = document.getElementById("tt").value;
	var radios = document.getElementsByName("totChoice");
	var customChecks = document.getElementsByName("totCustom");
	var foodName = "Tater Tots";
	var custom = "";
	var customTotal = 0;

	for (var i = 0; i < customChecks.length; i++) {
		if (customChecks[i].checked) {
			custom = customChecks[i].value;

			if (custom == "Cheddar Jack Cheese")
				customTotal += 1.15;
			else if (custom == "Hatch Queso")
				customTotal += 1.15;
			else if (custom == "Bacon")
				customTotal += 2.00;
			else if (custom == "Chili")
				customTotal += 1.50;
		}
	}

	if (radios[0].checked) {
		var total = qty * (lgTots + customTotal) * taxRate;
		foodTotal += total;
		totalQtyLTT += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " order(s) of Large " + foodName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * (regTots + customTotal) * taxRate;
		foodTotal += total;
		totalQtyRTT += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " order(s) of Regular " + foodName + " to cart (amount added $" + total + ").");
	}
}

function addNachos() {
	var qty = document.getElementById("un").value;
	var customChecks = document.getElementsByName("nachoOption")
	var foodName = "Ultimate Nachos";
	var custom = "";
	var customTotal = 0;
	totalQtyUN += (qty * 1);

	for (var i = 0; i < customChecks.length; i++) {
		if (customChecks[i].checked) {
			custom = customChecks[i].value;

			if (custom == "Chili")
				customTotal += 1.50;
			else if (custom == "Chicken")
				customTotal += 1.50;
			else if (custom == "Brisket")
				customTotal += 3.00;
			else if (custom == "House-Made Guacamole")
				customTotal += 1.50;
		}
	}

	var total = qty * (10.79 + customTotal) * taxRate;
	foodTotal += total;
	totalQtyUN += (qty * 1);
	total = total.toFixed(2);
	alert("Added " + qty + " order(s) of  " + foodName + " to cart (amount added $" + total + ").");
}

function calcWings() {
	var qty = document.getElementById("wing").value;
	var radios = document.getElementsByName("wingChoice");
	var foodName = "Wings";

	if (radios[0].checked) {
		var total = qty * sixWings * taxRate;
		foodTotal += total;
		totalQtySixWin += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " order(s) of Six " + foodName + " to cart (amount added $" + total + ").");
	}
	else if (radios[1].checked) {
		var total = qty * tenWings * taxRate;
		foodTotal += total;
		totalQtyTenWin += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " order(s) of Ten " + foodName + " to cart (amount added $" + total + ").");
	}
	else if (radios[2].checked) {
		var total = qty * fifWings * taxRate;
		foodTotal += total;
		totalQtyFifWin += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " order(s) of Fifteen " + foodName + " to cart (amount added $" + total + ").");
	}
	else if (radios[3].checked) {
		var total = qty * twenWings * taxRate;
		foodTotal += total;
		totalQtyTwenWin += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " order(s) of Twenty " + foodName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * thirWings * taxRate;
		foodTotal += total;
		totalQtyThirWin += (qty * 1);
		total = total.toFixed(2);
		alert("Added " + qty + " order(s) of Thirty " + foodName + " to cart (amount added $" + total + ").");
    }
}

function calcTotal() {
	var foodTotalStr = foodTotal.toFixed(2);
	var orderSummary = "";

	if (totalQtyAAB > 0) {
		orderSummary += "All-American Burger(s): " + totalQtyAAB + "\n";
	}

	if (totalQtyBMC > 0) {
		orderSummary += "Buffalo Mac & Cheese: " + totalQtyBMC + "\n";
	}

	if (totalQtyBRCS > 0) {
		orderSummary += "Buffalo Ranch Chicken Sandwich(es): " + totalQtyBRCS + "\n";
	}

	if (totalQtyBRCW > 0) {
		orderSummary += "Buffalo Ranch Chicken Wrap(s): " + totalQtyBRCW + "\n";
	}

	if (totalQtyCCS > 0) {
		orderSummary += "Chicken Caesar Salad(s): " + totalQtyCCS + "\n";
	}

	if (totalQtyCQ > 0) {
		orderSummary += "Chicken Quesadilla(s): " + totalQtyCQ + "\n";
	}

	if (totalQtyCS > 0) {
		orderSummary += "Chicken Sanwich(es): " + totalQtyCS + "\n";
	}

	if (totalQtyCNS > 0) {
		orderSummary += "Chips & Salsa: " + totalQtyCNS + "\n";
	}

	if (totalQtyLOR > 0) {
		orderSummary += "Large Onion Rings: " + totalQtyLOR + "\n";
	}
	if (totalQtyROR > 0) {
		orderSummary += "Regular Onion Rings: " + totalQtyROR + "\n";
	}

	if (totalQtyST > 0) {
		orderSummary += "Street Tacos: " + totalQtyST + "\n";
	}

	if (totalQtyLTT > 0) {
		orderSummary += "Large Tater Tots: " + totalQtyLTT + "\n";
	}
	if (totalQtyRTT > 0) {
		orderSummary += "Regular Tater Tots: " + totalQtyRTT + "\n";
	}

	if (totalQtyUN > 0) {
		orderSummary += "Ultimate Nachos: " + totalQtyUN + "\n";
	}

	if (totalQtySixWin > 0) {
		orderSummary += "Six Wings: " + totalQtySixWin + "\n";
	}
	if (totalQtyTenWin > 0) {
		orderSummary += "Ten Wings: " + totalQtyTenWin + "\n";
	}
	if (totalQtyFifWin > 0) {
		orderSummary += "Fifteen Wings: " + totalQtyFifWin + "\n";
	}
	if (totalQtyTwenWin > 0) {
		orderSummary += "Twenty Wings: " + totalQtyTwenWin + "\n";
	}
	if (totalQtyThirWin > 0) {
		orderSummary += "Thirty Wings: " + totalQtyThirWin + "\n";
	}

	alert("Your oder has been submitted!\n\n" + "Items ordered:\n" + orderSummary + "\nYour total is: $" + foodTotalStr + "\n\nThank you!");
}