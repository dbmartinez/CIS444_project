var taxRate = 1.0775;
var foodTotal = 0;
var regOnion = 6.49;
var regTots = 4.89;
var lgTots = 7.79;
var lgOnion = 10.29;
var sixWings = 11.29;
var tenWings = 16.49;
var fifWings = 22.29;
var twenWings = 27.99;
var thirWings = 38.29;
var totalQtyAAB = 0;
var totalQtyBMC = 0;
var totalQtyBRCS = 0;
var totalQtyCCS = 0;
var totalQtyCQ = 0;
var totalQtyCS = 0;
var totalQtyCNS = 0;
var totalQtyJP = 0;
var totalQtyOR = 0;
var totalQtyST = 0;
var totalQtyTT = 0;
var totalQtyUN = 0;
var totalQtyWin = 0;

function onlyOneCheckBox() {
	var limitcheckbox = document.getElementById('limitCheckbox11').getElementsByTagName("input");
	var limit = 1;
	for (var i = 0; i < limitcheckbox.length; i++) {
		limitcheckbox[i].onclick = function() {
			var checkedcount = 0;
				for (var i = 0; i < limitcheckbox.length; i++) {
				checkedcount += (limitcheckbox[i].checked) ? 1 : 0;
			}
			if (checkedcount > limit) {
				console.log("You can select a maximum of " + limit + " checkbox.");
				alert("You can select a maximum of " + limit + " checkbox.");
				this.checked = false;
			}
		}
	}
}

function onlyTwoCheckBoxes() {
	var limitcheckbox = document.getElementById('limitCheckbox2').getElementsByTagName("input");
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

function onlyOneCheckBoxe() {
	var limitcheckbox = document.getElementById('limitCheckboxOne').getElementsByTagName("input");
	var limit = 1;
	for (var i = 0; i < limitcheckbox.length; i++) {
		limitcheckbox[i].onclick = function () {
			var checkedcount = 0;
			for (var i = 0; i < limitcheckbox.length; i++) {
				checkedcount += (limitcheckbox[i].checked) ? 1 : 0;
			}
			if (checkedcount > limit) {
				console.log("You can select a maximum of " + limit + " checkbox.");
				alert("You can select a maximum of " + limit + " checkbox.");
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
	var total = 13.49 * qty;
	foodTotal += total * 1;
	total = total.toFixed(2);

	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			cheese = radios[i].value;
			alert(cheese);
        }
    }

	alert("Added " + qty + " order(s) of " + foodName + " with " + cheese + " to cart (amount added$" + total + ").");
}

function calcOnionRings() {
	var qty = document.getElementById("or").value;
	var radios = document.getElementsByName("onionChoice");
	var foodName = "Onion Rings";

	if (radios[0].checked) {
		var total = qty * lgOnion * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " order(s) of Large " + foodName + " to cart (amount added $" + total + ").");
	}

	else {
		var total = qty * regOnion * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " order(s) of Regular " + foodName + " to cart (amount added $" + total + ").");
    }
}

function calcTots() {
	var qty = document.getElementById("tt").value;
	var radios = document.getElementsByName("totChoice");
	var foodName = "Tater Tots";

	if (radios[0].checked) {
		var total = qty * lgTots * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " order(s) of Large " + foodName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * regTots * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " order(s) of Regular " + foodName + " to cart (amount added $" + total + ").");
    }
}

function calcWings() {
	var qty = document.getElementById("win").value;
	var radios = document.getElementsByName("wingChoice");
	var foodName = "Wings";

	if (radios[0].checked) {
		var total = qty * sixWings * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " order(s) of Six " + foodName + " to cart (amount added $" + total + ").");
	}
	else if (radios[1].checked) {
		var total = qty * tenWings * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " order(s) of Ten " + foodName + " to cart (amount added $" + total + ").");
	}
	else if (radios[2].checked) {
		var total = qty * fifWings * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " order(s) of Fifteen " + foodName + " to cart (amount added $" + total + ").");
	}
	else if (radios[3].checked) {
		var total = qty * twenWings * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " order(s) of Twenty " + foodName + " to cart (amount added $" + total + ").");
	}
	else {
		var total = qty * thirWings * taxRate;
		total = total.toFixed(2);
		alert("Added " + qty + " order(s) of Thirty " + foodName + " to cart (amount added $" + total + ").");
    }
}