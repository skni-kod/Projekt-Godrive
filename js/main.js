const burgerBtn = document.querySelector(".burger-btn");
const navMobile = document.querySelector(".nav__mobile");

const toggleBurgerBtn = () => {
	console.log(navMobile);
	navMobile.classList.toggle("nav-mobile--active");
	document.body.classList.toggle("stop-move");
};

burgerBtn.addEventListener("click", toggleBurgerBtn);
