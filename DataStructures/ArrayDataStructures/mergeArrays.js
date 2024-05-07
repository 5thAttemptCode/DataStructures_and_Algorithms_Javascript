// Merge two arrays together

// Case 1
// Concider a school where the 10th year has a total of 5 classes.
// You want to merge all grades from the 5 classes together to find out fx
// what the best/worst grade is, calculate average etc etc.

// Using the spread syntax
const class1Scores = [85, 92, 78]
const class2Scores = [90, 88, 95]
const class3Scores = [99, 78, 75]
const class4Scores = [91, 85, 99]
const class5Scores = [96, 71, 77]

// Merging the arrays
const allScores = [...class1Scores, ...class2Scores, ...class3Scores, ...class4Scores, ...class5Scores]

// Sorting the merged array in descending order
allScores.sort((a, b) => b - a)

console.log(allScores)


// Case 2
// You have arrays of prices from different categories. You want to merge the arrays 
// to find the cheapest product.

// Using concat method
const applePrices = [800, 1200, 1800]
const samsungPrices = [700, 850, 1200]
const huaweiPrices = [500, 575, 900]
const xiaomiPrices = [420, 600, 300]
const motorolaPrices = [100, 300, 400]

// Merge arrays using the concat method
const allPrices = [].concat(applePrices, samsungPrices, huaweiPrices, xiaomiPrices, motorolaPrices)

// Sort the merged array in ascending order
allPrices.sort((a, b) => a - b)

console.log(allPrices)