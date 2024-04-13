import "../assets/hero-image.jpg";
import "../assets/restaurant-indoors.jpg";
import "../assets/map.jpeg";
import { createElement, setStyles, cleanUp } from "../index.js";

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

function fillOpeningHours(oH) {
	const tableData = [
		["Sunday", "8am-9pm"],
		["Monday", "8am-9pm"],
		["Tuesday", "8am-9pm"],
		["Wednesday", "8am-9pm"],
		["Thursday", "8am-9pm"],
		["Friday", "8am-9pm"],
		["Saturday", "8am-9pm"],
	];
	const rightSide = createElement("div", "right-side");
	rightSide.appendChild(createElement("h2", "", "", "Opening hours"));
	const table = createElement("div", "grid table");
	for (let day of tableData) {
		for (let data of day) {
			table.appendChild(createElement("span", "", "", data));
		}
	}
	rightSide.appendChild(table);

	oH.appendChild(
		createElement(
			"img",
			"border",
			"",
			"",
			"restaurant-indoors.jpg",
			"Inside view of the restaurant",
		),
	);
	oH.appendChild(rightSide);
}

function fillLocations(loc) {
	const container = createElement("div", "container grid");
	const div = createElement("div", "grid");
	div.appendChild(createElement("h2", "", "", "Location"));
	div.appendChild(
		createElement("p", "", "", "Uttrakhand, Dehradun, 31 Street, chilliz"),
	);
	div.appendChild(createElement("p", "", "", "Phone: 78945612354682154"));
	div.appendChild(createElement("p", "", "", "Email: totallyFake@mail.com"));
	container.appendChild(div);
	container.appendChild(
		createElement("img", "border", "", "", "./map.jpeg", "map"),
	);
	loc.appendChild(container);
}

const fillSection = [
	fillHeroSection,
	fillAboutUs,
	fillOpeningHours,
	fillLocations,
];
export default function home() {
	cleanUp();
	setStyles("home");

	const content = document.querySelector("div#content");
	const sections = [
		createElement("section", "", "hero"),
		createElement("section", "", "about-us"),
		createElement("section", "", "opening-hours"),
		createElement("section", "", "location"),
	];

	sections.forEach((section, index) => {
		fillSection[index](section);
		content.appendChild(section);
	});
}
