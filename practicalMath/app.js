//Planning a cross-country road trip! 
// Define trip parameters
// Constants
const distance = 1500; // total trip distance in miles
const fuelPrices = 3; // cost of fuel per gallon in dollars
const budget = 175; // fuel budget in dollars

// Function to calculate fuel consumption and costs
function calculateTrip(speed) {
    let fuelEfficiency;
    if (speed === 55) {
        fuelEfficiency = 30; // miles per gallon at 55 mph
    } else if (speed === 60) {
        fuelEfficiency = 28; // miles per gallon at 60 mph
    } else if (speed === 75) {
        fuelEfficiency = 23; // miles per gallon at 75 mph
    } else {
        return "Invalid speed";
    }

    const gallonsNeeded = distance / fuelEfficiency;
    const fuelCost = gallonsNeeded * fuelPrices;
    const duration = distance / speed;

    return { gallonsNeeded, fuelCost, duration };
}

// Comparing results for different speeds
const speedOptions = [55, 60, 75];
speedOptions.forEach(speed => {
    const result = calculateTrip(speed);
    console.log(`At ${speed} mph:`);
    console.log(`- Gallons of fuel needed: ${result.gallonsNeeded.toFixed(2)}`);
    console.log(`- Fuel cost: $${result.fuelCost.toFixed(2)}`);
    console.log(`- Trip duration: ${result.duration.toFixed(2)} hours\n`);
});

// Checking if budget is enough for each speed option
console.log("Will the budget be enough for each speed option?");
speedOptions.forEach(speed => {
    const result = calculateTrip(speed);
    const isBudgetEnough = result.fuelCost <= budget;
    console.log(`At ${speed} mph: ${isBudgetEnough ? "Yes" : "No"}`);
});