
// A simple split and reverse method. This function splits the str into
// its seperate elements and then into an array, reverses the order, and joins them again-
function reverseStringSimple(str){
    return str.split("").reverse().join("")
}
console.log(reverseStringSimple("tpircsavaJ evol I"))


// The arrow function does exactly the same just cleaner
const reverseStringArrow = (str) => str.split("").reverse().join("")
console.log(reverseStringArrow("tpircsavaJ evol llits I"))


// The spread syntax method is used to spread the elements of an iterable 
// (like a string, array, or other iterable objects) into individual elements.
// like above, it converts the str into an array of elements, reverses the order
// and joins them again.
const reverseStringSpread = (str) => [ ...str ].reverse().join("")
console.log(reverseStringSpread("emas eht ton era tpircsavaJ dna avaJ"))


//Without the build-in reverse() function
function reverseWithoutBuildIn(str){
    let reversed = ""

    for (let char of str){
        reversed = char + reversed
    }

    return reversed
}
console.log(reverseWithoutBuildIn("driew llits si tpircsavaJ"))


//_____________CASE: check if password is a palindrome_______________
// When building a password strength checker, one factor could be to check
// if the password is a palindrome (word that reads the same when reading backwords)
// fx: "Level", "Anna", "Madam", "Racecar"
const isPalindrome = (psw) => {
    // Clear the password from non alpha-numeric values and convert to lwoer case
    const cleanPsw = psw.toLowerCase().replace(/[^a-z0-9]/g, '')

    // reverse the string
    // const reversedPsw = cleanPsw.split("").reverse().join("")  // Simple split method
    const reversedPsw = [...cleanPsw].reverse().join("") // Spread syntax method

    return cleanPsw === reversedPsw
}

const password = "level"
if(isPalindrome(password)){
    console.log("Your password is a palindrome. Please chose another one")
}