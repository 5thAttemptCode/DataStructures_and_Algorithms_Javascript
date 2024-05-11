// CASE
// We want to find a product in a large dataset of products.

// Function to perform binary search on a sorted array of words
function binarySearch(sortedArray, target) {
    let left = 0 // Index of the leftmost element in the array
    let right = sortedArray.length - 1 // Index of the rightmost element in the array
    
    // Loop until the left index is less than or equal to the right index
    while (left <= right) {
        // Calculate the middle index
        let mid = Math.floor((left + right) / 2)

        // Check if the middle element is the target word
        if (sortedArray[mid] === target) {
            return mid // Return the index of the target word
        } else if (sortedArray[mid] < target) {
            // If the middle element is less than the target word,
            // update the left index to search the right half of the array
            left = mid + 1
        } else {
            // If the middle element is greater than the target word,
            // update the right index to search the left half of the array
            right = mid - 1
        }
    }

    // If the target word is not found, return -1
    return -1
}

// Example usage
const sortedWords = ["sneakers", "watches", "belts", "glasses", "pens", "smartphones", "laptops", "wallets" ]
const searchWord = 'glasses'
const index = binarySearch(sortedWords, searchWord)

if (index !== -1) {
    console.log(`${searchWord} found at index ${index}`)
} else {
    console.log(`${searchWord} not found`)
}
