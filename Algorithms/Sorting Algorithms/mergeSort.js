//CASE
// We are organizing a large library of books by their ISBN number.
// Step 1: We have a large array of unsorted books, but each book has a unique ISBN.
// Step 2: We use merge sort to divide the large array of books into smaller sub-arrays.
// Step 3: Each sub-array will now be sorted individually.
// Step 4: Once each sub-pile is sorted, you start merging them back together in a sorted 
//         order. This involves comparing the ISBNs of books from different sub-piles 
//         and arranging them in the correct order.
// Final: We have a sorted array of all books, organized by their ISBN.


// Book class representing a book with its ISBN
class Book {
    constructor(isbn) {
        this.isbn = isbn
    }
}

// Merge Sort function to sort an array of books by their ISBNs
function mergeSortBooks(books) {
    // Base case: if the array has only 1 or 0 elements, it is already sorted
    if (books.length <= 1) {
        return books
    }

    // Find the middle index of the array
    const middle = Math.floor(books.length / 2)
    // Split the array into two halves
    const left = books.slice(0, middle)
    const right = books.slice(middle)

    // Recursively sort the left and right halves
    return mergeBooks(
        mergeSortBooks(left),
        mergeSortBooks(right)
    )
}

// Merge function for merging two sorted arrays of books
function mergeBooks(left, right) {
    let result = [] // Initialize an empty array to store the sorted result
    let leftIndex = 0 // Initialize an index pointer for the left array
    let rightIndex = 0 // Initialize an index pointer for the right array

    // Compare elements from the left and right arrays and merge them into a result
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex].isbn < right[rightIndex].isbn) {
            result.push(left[leftIndex]) // Add the smaller element from the left array to result
            leftIndex++ // Move the left index pointer to the next element
        } else {
            result.push(right[rightIndex]) // Add the smaller element from the right array to result
            rightIndex++ // Move the right index pointer to the next element
        }
    }

    // Add any remaining elements from the left and right arrays to result
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

// Book array:
const unsortedBooks = [
    new Book("9780679746041"),
    new Book("9780747532699"),
    new Book("9780141182704"),
    new Book("9780439554930")
]

console.log("Unsorted Books:")
console.log(unsortedBooks.map(book => book.isbn))

// Sort the array of books using Merge Sort
const sortedBooks = mergeSortBooks(unsortedBooks)

console.log("\nSorted Books:")
console.log(sortedBooks.map(book => book.isbn))
