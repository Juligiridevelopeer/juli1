// Step 1: Define the exchange rate
const exchangeRateUSDToINR = 80;

// Step 2: Original object with items and prices in USD
const items = {
    apple: 2.5,
    banana: 1.8,
    orange: 3.2,
    mango: 4.5
};

// Step 3: Use map to convert prices to INR and create a new object
const convertedPrices = Object.keys(items).map(item => ({
    [item]: items[item] * exchangeRateUSDToINR
}));

// Step 4: Output the new object with prices converted to INR
console.log("Converted prices in INR:", convertedPrices);


