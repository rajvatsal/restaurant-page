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

function fillAboutUs(aboutUs) {
	const paraContent = `
        At Chilliz, we believe that every meal should be a delightful journey
        of flavors, crafted with passion and served with warmth. Nestled in
        the heart of Dehradun, our restaurant is a culinary haven where
        exquisite cuisine meets inviting ambiance. Our dedicated team of chefs
        brings together a fusion of traditional recipes and innovative
        techniques, sourcing the finest ingredients to create dishes that
        tantalize the palate. Whether you're joining us for a casual brunch, a
        romantic dinner, or a celebration with loved ones, we strive to
        provide an unforgettable dining experience. At chilliz, we're not just
        about serving food; we're about creating memories and fostering
        connections. Welcome to our table; let us enchant you with our
        culinary delights
      `;
	aboutUs.appendChild(createElement("h2", "", "", "About us"));
	aboutUs.appendChild(createElement("p", "", "", paraContent));
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
	fillAboutUs(sections[1]);
	sections.forEach((section) => content.appendChild(section));
}
