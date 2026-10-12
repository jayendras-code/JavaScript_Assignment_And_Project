let inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

console.log("--- Initializing Inventory System ---");
function addNewProduct() {
    let newProductName = prompt("Enter the name of the new product:");
    let newProductPrice = parseFloat(prompt("Enter the price of the new product:"));
    if (newProductName && !isNaN(newProductPrice)) {
    // inventory.push({ name: newProductName, price: newProductPrice });
    // console.log(`[Prompt executed: User adds "${newProductName}" at "$${newProductPrice}"]`);
    } 
    
    else {
    console.log("Invalid input. Please enter valid product details.");
     } 
inventory.push({ name: newProductName, price: newProductPrice });

console.log(`[Prompt executed: User adds "${newProductName}" at "$${newProductPrice}"]`);
     
}


confirm("Do you want to add a new product to the inventory?") ? addNewProduct() : console.log("No new product added.");





// let newProductName = prompt("Enter the name of the new product:");
// let newProductPrice = parseFloat(prompt("Enter the price of the new product:"));



confirm("Do you want to view the inventory roster?") ? displayInventory() : console.log("Inventory display skipped.");

function displayInventory() {
    console.log("--- Processing Inventory Roster (forEach) ---");
    inventory.forEach(item => {
        let category = categorizeItem(item.price);
        console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${category}`);
    }); 
}

function categorizeItem(price) {
    if (price < 50) {
        return "Budget";
    } else if (price >= 50 && price < 200) {
        return "Standard";
    } else {
        return "Premium";
    }
}


const displayAnalytics = () => {
    let totalValue = inventory.reduce((acc, item) => acc + item.price, 0);
    console.log("--- Financial Analytics ---");
    console.log(`Total Inventory Value: $${totalValue}`);}

confirm("Do you want to view financial analytics?") ? displayAnalytics() : console.log("Financial analytics display skipped.");
const affordableItems = inventory.filter(item => item.price < 200).map(item => item.name);
console.log(`Filtered Affordable Items (Under $200): ${JSON.stringify(affordableItems)}`);

const formattedReport = inventory.map(item => `${item.name.toUpperCase()}: $${item.price}`);
console.log(`Formatted Report List: ${JSON.stringify(formattedReport)}`);