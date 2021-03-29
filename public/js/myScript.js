var open = 0;

function openNav() {
	if (!open) {
		document.getElementById("nav-content").style.width = "250px";
  		document.getElementById("nav-content").style.visibility = "visible";
  		document.getElementById("nav-content").style.opacity = "1";
  		open = 1;
	} else {
		document.getElementById("nav-content").style.width = "0%";
		open = 0;
	}
}

function closeNav() {
	if (open) {
		document.getElementById("nav-content").style.width = "0%";
		open = 0;
	}
}
