import "./styles/josh's-reset.css";
import "./styles/styles.css";
import home from "./scripts/home.js";
import menu from "./scripts/menu.js";

export const setStyles = (style) => root.setAttribute("class", style);

export function createElement(elmName, elmClasses, elmIds, text, src, alt) {
	const element = document.createElement(elmName);
	if (elmClasses) element.setAttribute("class", elmClasses);
	if (elmIds) element.setAttribute("id", elmIds);
	if (text) element.textContent = text;
	if (src) element.src = src;
	if (alt) element.alt = alt;
	return element;
}

export function cleanUp() {
	document.querySelector("div#content").remove();
	body.appendChild(createElement("div", "", "content"));
}

const buttons = document.querySelectorAll("header>nav>button");
const body = document.querySelector("body");
const root = document.querySelector(":root");

buttons.forEach((button, index) => {
	let callBack = null;

	switch (index) {
		case 0:
			callBack = home;
			break;
		case 1:
			callBack = menu;
			break;
		case 2:
			callBack = contact;
			break;
	}
	button.addEventListener("click", callBack);
});

home();
