const nav = document.querySelector("header>nav");
const threeBars = document.querySelector(".three-bars");
const cross = document.querySelector(".x-mark");
threeBars.addEventListener("click", () => {
	threeBars.style.display = "none";
	cross.style.display = "block";
	nav.style.transform = "translateX(0%)";
});
cross.addEventListener("click", () => {
	threeBars.style.display = "block";
	cross.style.display = "none";
	nav.style.transform = "translateX(-100%)";
});
