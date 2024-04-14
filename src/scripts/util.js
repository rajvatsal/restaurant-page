const body = document.querySelector("body");
const root = document.querySelector(":root");

export const setStyles = (style) => root.setAttribute("class", style);

export function cleanUp() {
	document.querySelector("div#content").remove();
	body.appendChild(createElement("div", "", "content"));
}

export function createElement(elmName, elmClasses, elmIds, text, src, alt) {
	const element = document.createElement(elmName);
	if (elmClasses) element.setAttribute("class", elmClasses);
	if (elmIds) element.setAttribute("id", elmIds);
	if (text) element.textContent = text;
	if (src) element.src = src;
	if (alt) element.alt = alt;

	element.appendChildren = function () {
		for (let i = 0; i < arguments.length; i++) {
			this.appendChild(arguments[i]);
		}
	};

	return element;
}

export function createShoppingCart() {
	const svgNS = "http://www.w3.org/2000/svg";
	const svg = document.createElementNS(svgNS, "svg");
	const path = document.createElementNS(svgNS, "path");

	svg.setAttribute("xmlns", svgNS);
	svg.setAttribute("viewBox", "0 0 24 24");
	svg.setAttribute("fill", "currentColor");
	svg.setAttribute("class", "w-6 h-6");

	path.setAttribute(
		"d",
		"M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",
	);

	svg.appendChild(path);

	return svg;
}
