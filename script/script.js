const toggleThemeBtn = document.querySelectorAll(".toggle-theme");
const submenuOpenBtn = document.querySelector(".submenu-open-btn");
const submenu = document.querySelector(".submenu");
const navOpenMenu = document.querySelector(".nav-icon");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const navCloseBtn = document.querySelector(".nav-close-btn");
const cartCloseBtn = document.querySelector(".cart-close-btn")
const cartIcon = document.querySelector(".cartIcon");
const cartSidebar = document.querySelector(".cartSidebar");

cartIcon.addEventListener('click', (e) => {
    console.log('cartCloseBtn');
    cartSidebar.classList.remove("-left-64");
    cartSidebar.classList.add("left-0");
    overlay.classList.add("overlay--visible");
    overlay.classList.remove("invisible")
    overlay.classList.remove("opacity-0")
})

cartCloseBtn.addEventListener('click', (e) => {
    cartSidebar.classList.add("-left-64");
    cartSidebar.classList.remove("left-0");
    overlay.classList.remove("overlay--visible");
    overlay.classList.add("invisible")
    overlay.classList.add("opacity-0")
})
overlay.addEventListener('click', () => {
    nav.classList.add("-right-64");
    nav.classList.remove("right-0");
    cartSidebar.classList.add("-left-64");
    cartSidebar.classList.remove("left-0");
    overlay.classList.remove("overlay--visible");
    overlay.classList.add("invisible")
    overlay.classList.add("opacity-0")
})
navOpenMenu.addEventListener("click", () => {
    nav.classList.remove("-right-64");
    nav.classList.add("right-0");
    overlay.classList.add("overlay--visible");
    overlay.classList.remove("invisible")
    overlay.classList.remove("opacity-0")
})

navCloseBtn.addEventListener("click", () => {
    nav.classList.add("-right-64");
    nav.classList.remove("right-0");
    overlay.classList.remove("overlay--visible");
    overlay.classList.add("invisible")
    overlay.classList.add("opacity-0")
})

toggleThemeBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    });
});

submenuOpenBtn.addEventListener("click", (e) => {
    e.currentTarget.parentElement.classList.toggle("text-orange-300");
    submenu.classList.toggle("flex");
});
