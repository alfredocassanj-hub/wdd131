// Footer year
const currentYear = new Date().getFullYear();

document.querySelector("#year").textContent = currentYear;


// Last modified date
document.querySelector("#lastModified").textContent =
    document.lastModified;



// Weather static values

const temperature = 8; // Celsius
const windSpeed = 15;  // km/h



// Wind Chill calculation function

function calculateWindChill(temp, speed){

    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);

}


// Check conditions before calling function

let windChill = "N/A";


if(temperature <= 10 && windSpeed > 4.8){

    windChill = calculateWindChill(
        temperature,
        windSpeed
    ) + " °C";

}


// Display wind chill

document.querySelector("#windchill").textContent = windChill;