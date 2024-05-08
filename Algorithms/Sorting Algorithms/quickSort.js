// CASE
// Imagine you're working on a finance app that processes large amounts of transaction data. 
// Each transaction contains various attributes like transaction ID, amount, date, and type. 
// Users of the app often need to view transactions sorted by different attributes, 
// such as by date or by transaction amount.


// Sample array of transaction objects
let transactions = [
    { id: 1, amount: 100.50, date: "2024-05-01", type: "purchase" },
    { id: 2, amount: 75.20, date: "2024-05-02", type: "withdrawal" },
    { id: 3, amount: 150.75, date: "2024-05-03", type: "purchase" },
]

// Quick sort function to sort transactions by amount
function quickSortByAmount(arr) {
    // Base case: If the array has 1 or fewer elements, it is already sorted,
    // so we return the array as is.
    if (arr.length <= 1) {
        return arr
    }

    // Choose the first element of the array as the pivot.
    // The pivot is an element chosen from the array being sorted.
    // In the context of sorting algorithms, the pivot is the key element around 
    // which the sorting process happens.
    const pivot = arr[0].amount
    // Initialize two empty arrays to hold elements less than and greater than the pivot.
    const left = []
    const right = []

    // Iterate through the array starting from the second element.
    for (let i = 1; i < arr.length; i++) {
        // If the current element's amount is less than the pivot, add it to the left array.
        if (arr[i].amount < pivot) {
            left.push(arr[i])
        } else {
            // If the current element's amount is greater than or equal to the pivot,
            // add it to the right array.
            right.push(arr[i])
        }
    }

    // Recursively apply quick sort to the left and right arrays, and combine the results
    // with the pivot in between, building the sorted array.
    return [...quickSortByAmount(left), arr[0], ...quickSortByAmount(right)]
}

// Function to display sorted transactions
function displayTransactions(transactions) {
    // Iterate through the transactions array and display each transaction's details.
    for (const transaction of transactions) {
        console.log(`Transaction ID: ${transaction.id}, Amount: ${transaction.amount}, Date: ${transaction.date}, Type: ${transaction.type}`);
    }
}

// Sort transactions by amount using quick sort
transactions = quickSortByAmount(transactions)

// Display sorted transactions
console.log("Transactions sorted by amount:")
displayTransactions(transactions)