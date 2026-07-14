const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");


if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");


        if (menuButton.textContent.trim() === "☰") {

            menuButton.textContent = "✖";

        } else {

            menuButton.textContent = "☰";

        }

    });

}



const year = document.querySelector("#currentyear");

if (year) {
    year.textContent = new Date().getFullYear();
}



const lastModified = document.querySelector("#lastModified");

if (lastModified) {

    lastModified.textContent =
        "Last Modification: " + document.lastModified;

}