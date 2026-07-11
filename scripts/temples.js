const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modification: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");

const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {

navigation.classList.toggle("open");

menuButton.textContent =
navigation.classList.contains("open") ? "✖" : "☰";
});