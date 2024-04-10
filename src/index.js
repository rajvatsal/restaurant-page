import "./styles/josh's-reset.css";
import home from "./scripts/home.js";

export function createElement(elmName, elmClasses, elmIds, text, src, alt) {
	const element = document.createElement(elmName);
	if (elmClasses) element.setAttribute("class", elmClasses);
	if (elmIds) element.setAttribute("id", elmIds);
	if (text) element.textContent = text;
	if (src) element.src = src;
	if (alt) element.alt = alt;
	return element;
}

home();
