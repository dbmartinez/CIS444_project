function onlyOneCheckBox() {
	var limitcheckbox = document.getElementById('limitCheckbox1').getElementsByTagName("input");
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