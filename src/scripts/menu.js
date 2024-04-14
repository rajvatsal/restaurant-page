import "../assets/panner.jpg";
import "../assets/egg.jpg";
import "../assets/beef.jpg";
import "../assets/crab.jpg";
import "../assets/salad.jpg";
import {
	createElement,
	createShoppingCart,
	setStyles,
	cleanUp,
} from "./util.js";

function createDish(image, name, desc, price) {
	const pic = createElement("img", "", "", "", `./${image}`, "Food image");
	const dishName = createElement("h2", "", "", name);
	const dishPrice = createElement("span", "", "", price);
	const dishDesc = createElement("p", "", "", desc);

	const dish = createElement("div", "dish container");
	const bottomSection = createElement("div", "bottom");
	const btn = createElement("button", "", "", "buy");
	const shoppingCart = createShoppingCart();
	const btnShoppingCartContainer = createElement("div", "button");
	const priceNameContainer = createElement("div");

	btnShoppingCartContainer.appendChildren(btn, shoppingCart);
	priceNameContainer.appendChildren(dishName, dishPrice);
	bottomSection.appendChildren(
		priceNameContainer,
		dishDesc,
		btnShoppingCartContainer,
	);
	dish.appendChildren(pic, bottomSection);

	return dish;
}

const dishes = [
	createDish("panner.jpg", "Panner Tikka", "Delicious Tikka", "$10"),
	createDish("egg.jpg", "Egg", "Delicious Egg", "$12"),
	createDish("beef.jpg", "Beef", "Delicious Beef", "$9"),
	createDish("crab.jpg", "Crab", "Delicious Crab", "$15"),
	createDish("salad.jpg", "Salad", "Delicious Salad", "$9"),
];

export default function menu() {
	cleanUp();
	setStyles("menu");

	const content = document.getElementById("content");
	const section = createElement("section", "menu");
	const heading = createElement("h1", "", "", "Our Menu");
	const dishesContainer = createElement("div", "dishes");

	dishesContainer.appendChildren(...dishes);
	section.appendChildren(heading, dishesContainer);
	content.appendChild(section);
}
