/*
 * The moneySaver function takes in student info and returns a string
 * that details the amount of money they would save on gas if they 
 * switched to the Ford Fusion Hybrid.
 *
 * @param {string} studentName - The name of the student
 * @param {number} cityMpg - The city miles per gallon their current car gets
 * @param {number} highwayMpg - The highway miles per gallon their current car gets
 * @param {number} cityMiles - The number of personal city miles they drive in one year
 * @param {number} highwayMiles - The number of personal highway miles they drive in one year
 * @param {number} days - The number of days that student drives per year
 *
 * @return {string} Information about a user's annual gas savings
 */
 
function moneySaver(studentName, cityMpg, highwayMpg, cityMiles, highwayMiles, days){
    // Savings will store the result of all the calculations
    var savings = 0

    // The mpg for the Ford Fusion Hybrid
    var hybridCityMpg = 43
    var hybridHighwayMpg = 41
    
    // Store the value of running the calculateCostOfGas function for each
    // car. 
    var currentCarGasTotal = calculateCostOfGas(365, cityMpg, highwayMpg, cityMiles, highwayMiles)
    var hybridGasTotal = calculateCostOfGas(365,  hybridCityMpg, hybridHighwayMpg, cityMiles, highwayMiles)
    
    savings = currentCarGasTotal - hybridGasTotal

    var answer = 
    `
        ${studentName} can expect to save at least $${savings.toFixed(2)} on gasoline in this upcoming year!
        Using ${studentName}'s current car, if would cost $${currentCarGasTotal.toFixed(2)}, while the 
        hybrid would cost $${hybridGasTotal.toFixed(2)}.
    `
    return answer
}

/*
 * The calculateCostOfGas function 
 *
 * @param {number} days
 * @param {number} cityMpg
 * @param {number} highwayMpg 
 * @param {number} cityMilesPerDay
 * @param {number} highwayMilesPerDay
 *
 * @return {number} totalCost
 */

function calculateCostOfGas(days, cityMpg, highwayMpg, cityMilesPerDay, highwayMilesPerDay){
    var costPerGallon = 2.95
    var totalCost = 0
    
    var cityMiles = days * cityMilesPerDay
    var highwayMiles = days * highwayMilesPerDay
    
    var cityGallons = cityMiles / cityMpg
    var highwayGallons = highwayMiles / highwayMpg
    
    var cityCost = cityGallons * costPerGallon
    var highwayCost = highwayGallons * costPerGallon
    
    totalCost = cityCost + highwayCost
    
    return totalCost
}
