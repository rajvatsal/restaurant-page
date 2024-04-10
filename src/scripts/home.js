import "../styles/home.css";
import "../assets/hero-image.jpg";
import "../assets/restaurant-indoors.jpg";
import "../assets/map.jpeg";
import { createElement } from "../index.js";

function fillHeroSection(hero) {
	const div = createElement("div");
	const image = createElement(
		"img",
		"hero",
		"",
		"",
		"./hero-image.jpg",
		"Delicious kebab",
	);
	div.appendChild(
		createElement("h1", "", "", "Best food you will find in Dehradun"),
	);
	div.appendChild(createElement("button", "", "", "Learn More"));

	hero.appendChild(div);
	hero.appendChild(image);
}

export default function home() {
	const content = document.querySelector("div#content");
	const sections = [
		createElement("section", "", "hero"),
		createElement("section", "", "about-us"),
		createElement("section", "", "opening-hours"),
		createElement("section", "", "location"),
	];

	fillHeroSection(sections[0]);
	content.prepend(sections[0]);
	// sections.forEach((section) => content.appendChild(section));
}
