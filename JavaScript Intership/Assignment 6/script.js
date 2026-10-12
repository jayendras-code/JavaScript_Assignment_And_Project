console.log("-- All Products (forEach) --");


let products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

products.forEach(function(item) {
    console.log("name:", item.name, "-", "price:$", item.price);
});


console.log("-- Filtered Products (Price < $50) --");

let filteredProducts = products.filter((price) =>{
    return price.price<50;
})

console.log(filteredProducts);

console.log("-- Mapped Product Tags (map) --");

let mapppedProduct = products.map((item) =>{
    return item.name.toUpperCase() + " costs $"+ item.price; 
})

console.log(JSON.stringify(mapppedProduct));



