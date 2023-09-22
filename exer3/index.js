const aboutUs = document.getElementById("aboutUs");
aboutUs.style.color = "red";

document.addEventListener("click", (event) => {
    const navBar = document.getElementById("navbar");
    if (event.target === navBar) {
        navBar.style.backgroundColor = "red";
    }
});