// Current year for footer
const today = new Date();

document.getElementById("currentyear").textContent = today.getFullYear();

// Last modified date of the document
document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;