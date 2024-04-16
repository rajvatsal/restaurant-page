//css
import "./styles/josh's-reset.css";
import "./styles/styles.css";

//pages
import home from "./scripts/home.js";
import menu from "./scripts/menu.js";
import "./scripts/header.js";

const buttons = document.querySelectorAll("header>nav>ul button");

buttons.forEach((button, index) => {
	let callBack = null;

	switch (index) {
		case 0:
			callBack = home;
			break;
		case 1:
			callBack = menu;
			break;
		// case 2:
		// 	callBack = contact;
		// 	break;
	}
	button.addEventListener("click", callBack);
});

home();
