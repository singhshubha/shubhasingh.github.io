function toggleMenu() {
    const menu= document.querySelector(".menu-links");
    const icon= document.querySelector("hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleDarkMode() {
    const body = document.body;
    const nav = document.querySelectorAll("nav");
    const darkModeBtn = document.getElementById("dark-mode-btn");

    // Toggle dark-mode class
    body.classList.toggle("dark-mode");
    nav.forEach(n => n.classList.toggle("dark-mode"));

    // Update button text
    if (body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "Light Mode";
    } else {
        darkModeBtn.textContent = "Dark Mode";
    }
}
