const products = [

{
id: "p001",
name: "Smart Watch"
},

{
id: "p002",
name: "Laptop Computer"
},

{
id: "p003",
name: "Wireless Headphones"
},

{
id: "p004",
name: "Smart Phone"
},

{
id: "p005",
name: "Tablet"
}

];

const productSelect = document.querySelector("#product");


products.forEach(product => {


let option = document.createElement("option");


option.value = product.id;


option.textContent = product.name;


productSelect.appendChild(option);


});