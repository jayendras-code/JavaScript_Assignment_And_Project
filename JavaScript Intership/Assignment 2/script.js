let userBill = Number(prompt("Enter the total bill amount:"));
let tipPercentage = Number(prompt("Enter the tip percentage you would like to give :"));

let tipAmount = (userBill * tipPercentage) / 100;
let totalAmount = userBill + tipAmount;

console.log("Subtotal: $ " + userBill.toFixed(2)); 
console.log("Tip percentage:" + tipPercentage +"%");
console.log("Calulated Tip: $ " + tipAmount.toFixed(2));
console.log("Total Amount to Pay: $ " + totalAmount.toFixed(2));