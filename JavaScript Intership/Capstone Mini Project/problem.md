# 🚀 Capstone Mini Project
Project Title: Interactive Product Inventory & Analytics Dashboard
Project Overview: Students will build an integrated console-based application that combines all core JavaScript concepts into a single comprehensive program.
Core Requirements & Implementation Flow:
1. Data & Input Initialization: Prompts the user to input a new product name and price using prompt(), converting inputs explicitly. Stores these inside an array of objects alongside pre-existing items.
2. Control Flow & Conditional Evaluation: Uses if...else and switch blocks to validate input data and assign category badges (e.g., 'Budget' vs 'Premium') based on dynamic price thresholds.
3. Loops & Flow Control: Uses loops and conditional break/continue statements to search through the inventory array and handle bad or missing user inputs cleanly.
4. Functions & Scope: Implements regular functions and arrow functions to calculate total inventory statistics and apply custom tax/discount parameters with secure local scoping.
5. Array Methods & Iteration: Leverages forEach() to log final inventory sheets, filter() to isolate items matching specific criteria, and map() to produce a transformed report summary.
Overall Project Expected Output:
Console Output Simulation:


--- Initializing Inventory System ---
[Prompt executed: User adds "Monitor" at "$150"]

--- Processing Inventory Roster (forEach) ---
* Item: Laptop ($800) -> Category: Premium
* Item: Mouse ($25) -> Category: Budget
* Item: Monitor ($150) -> Category: Standard

--- Financial Analytics ---
Total Inventory Value: $975
Filtered Affordable Items (Under $200): ["Mouse", "Monitor"]
Formatted Report List: ["LAPTOP: $800", "MOUSE: $25", "MONITOR: $150"]

