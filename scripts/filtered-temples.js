const temples = [

{
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April 6",
    area: 253000,
    imageUrl: "images/temple1.webp"
},

{
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March 10",
    area: 41000,
    imageUrl: "images/temple2.webp"
},

{
    templeName: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2026, May 31",
    area: 44000,
    imageUrl: "images/temple3.webp"
},

{
    templeName: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980, October 27",
    area: 52000,
    imageUrl: "images/temple4.webp"
},

{
    templeName: "London England Temple",
    location: "London, England",
    dedicated: "1958, September 7",
    area: 42000,
    imageUrl: "images/temple5.webp"
},

{
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004, January 11",
    area: 17500,
    imageUrl: "images/temple6.webp"
},

{
    templeName: "Nairobi Kenya Temple",
    location: "Nairobi, Kenya",
    dedicated: "2025, April 13",
    area: 18000,
    imageUrl: "images/temple7.webp"
},

{
    templeName: "Manila Philippines Temple",
    location: "Manila, Philippines",
    dedicated: "1984, September 25",
    area: 26000,
    imageUrl: "images/temple8.webp"
},

{
    templeName: "Mexico City Mexico Temple",
    location: "Mexico City, Mexico",
    dedicated: "1983, December 2",
    area: 116000,
    imageUrl: "images/temple9.webp"
}

];



// Criar cards dos templos

function displayTemples(templeList) {

    const gallery = document.querySelector(".gallery");

    gallery.innerHTML = "";


    templeList.forEach((temple) => {


        const card = document.createElement("figure");


        card.innerHTML = `

        <img 
        src="${temple.imageUrl}" 
        alt="${temple.templeName}"
        loading="lazy">


        <figcaption>

        <h2>${temple.templeName}</h2>

        <p><strong>Location:</strong> ${temple.location}</p>

        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>

        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>

        </figcaption>

        `;


        gallery.appendChild(card);


    });

}



// Filtros


function showHome(){

    displayTemples(temples);

}



function showOld(){

    const oldTemples = temples.filter(
        temple => Number(temple.dedicated.substring(0,4)) < 1900
    );

    displayTemples(oldTemples);

}



function showNew(){

    const newTemples = temples.filter(
        temple => Number(temple.dedicated.substring(0,4)) > 2000
    );

    displayTemples(newTemples);

}



function showLarge(){

    const largeTemples = temples.filter(
        temple => temple.area > 90000
    );

    displayTemples(largeTemples);

}



function showSmall(){

    const smallTemples = temples.filter(
        temple => temple.area < 10000
    );

    displayTemples(smallTemples);

}



// Menu mobile

const menuButton = document.querySelector("#menu");

const navigation = document.querySelector("#navigation");


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

});



// Links do menu

const links = document.querySelectorAll("nav a");


links[0].addEventListener("click", showHome);

links[1].addEventListener("click", showOld);

links[2].addEventListener("click", showNew);

links[3].addEventListener("click", showLarge);

links[4].addEventListener("click", showSmall);



// Footer

document.querySelector("#currentyear").textContent =
new Date().getFullYear();


document.querySelector("#lastModified").textContent =
document.lastModified;



// Mostrar todos quando abrir

displayTemples(temples);