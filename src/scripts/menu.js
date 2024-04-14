import "../assets/palak-paneer.jpg";
import "../assets/biryani.jpg";
import "../assets/panni-puri.jpg";
import "../assets/masala-dosa.jpg";
import "../assets/butter-chicken.jpg";
import "../assets/malai-kofta.jpg";
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
	createDish(
		"butter-chicken.jpg",
		"Butter Chicken",
		"A rich and creamy chicken dish cooked in a tomato-based gravy with butter and cream, often flavored with various spices.",
		"500Rs",
	),
	createDish(
		"palak-paneer.jpg",
		"Palak Paneer",
		"A vegetarian dish made from spinach (palak) and paneer (Indian cottage cheese). It's typically cooked with garlic, garam masala, and other spices to create a flavorful gravy.",
		"800Rs",
	),
	createDish(
		"masala-dosa.jpg",
		"Masala Dosa",
		"A South Indian specialty, masala dosa is a fermented crepe made from rice batter and black lentils, filled with a spiced potato mixture and served with coconut chutney and sambar (a lentil-based stew).",
		"390Rs",
	),
	createDish(
		"panni-puri.jpg",
		"Pani Puri",
		"A popular street food snack consisting of hollow puri (crispy round shells) filled with a mixture of flavored water, tamarind chutney, chaat masala, potato, onion, and chickpeas. It offers a burst of sweet, sour, tangy, and spicy flavors in every bite.",
		"200Rs",
	),
	createDish(
		"malai-kofta.jpg",
		"Malai Kofta",
		"A rich and indulgent vegetarian dish made from deep-fried dumplings (koftas) made of paneer, potatoes, nuts, and spices, served in a creamy tomato-based gravy flavored with cream, butter, and various spices. It's a favorite at many Indian restaurants for its luxurious taste and texture.",
		"790Rs",
	),
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
