// ---------------------------------------------------------------
// Temple data
// ---------------------------------------------------------------
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/temple1.webp"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "images/temple2.webp"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/temple3.webp"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "images/temple4.webp"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "images/temple5.webp"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "images/temple6.webp"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "images/temple7.webp"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "images/temple8.webp"
    },
    {
        templeName: "Nauvoo Illinois",
        location: "Nauvoo, Illinois, United States",
        dedicated: "2002, June, 27",
        area: 54000,
        imageUrl: "images/temple9.webp"
    },
];

// ----------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------

function getDedicatedYear(dedicatedString) {
    return parseInt(dedicatedString.split(",")[0].trim(), 10);
}

function formatArea(area) {
    return area.toLocaleString("en-US") + " sq ft";
}

// ---------------------------------------------------------------
// Card rendering
// ---------------------------------------------------------------
const gallery = document.querySelector("#gallery");
const emptyState = document.querySelector("#emptyState");

function buildCard(temple) {
    const figure = document.createElement("figure");

    figure.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
        <figcaption>
            <span class="temple-name">${temple.templeName}</span>
            <span class="temple-detail"><strong>Location:</strong> ${temple.location}</span>
            <span class="temple-detail"><strong>Dedicated:</strong> ${temple.dedicated}</span>
            <span class="temple-detail"><strong>Area:</strong> ${formatArea(temple.area)}</span>
        </figcaption>
    `;

    return figure;
}

function renderTemples(templeList) {
    gallery.innerHTML = "";

    if (templeList.length === 0) {
        emptyState.hidden = false;
        return;
    }

    emptyState.hidden = true;
    const fragment = document.createDocumentFragment();
    templeList.forEach((temple) => fragment.appendChild(buildCard(temple)));
    gallery.appendChild(fragment);
}

// ---------------------------------------------------------------
// Filtering
// ---------------------------------------------------------------
function filterTemples(filterName) {
    switch (filterName) {
        case "old":
            return temples.filter((t) => getDedicatedYear(t.dedicated) < 1900);
        case "new":
            return temples.filter((t) => getDedicatedYear(t.dedicated) > 2000);
        case "large":
            return temples.filter((t) => t.area > 90000);
        case "small":
            return temples.filter((t) => t.area < 10000);
        case "home":
        default:
            return temples;
    }
}

const navLinks = document.querySelectorAll("#navigation a");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");

        renderTemples(filterTemples(link.dataset.filter));

        // Close the mobile menu after a selection, if it's open.
        if (navigation.classList.contains("open")) {
            navigation.classList.remove("open");
            menuButton.textContent = "☰";
        }
    });
});

// ---------------------------------------------------------------
// Mobile menu toggle (same behavior as your original temples.js)
// ---------------------------------------------------------------
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

// ---------------------------------------------------------------
// Footer: copyright year + last modified date
// ---------------------------------------------------------------
const year = document.querySelector("#currentyear");

if (year) {
    year.textContent = new Date().getFullYear();
}

const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = "Last Modification: " + document.lastModified;
}

// ---------------------------------------------------------------
// Initial render
// ---------------------------------------------------------------
renderTemples(temples);