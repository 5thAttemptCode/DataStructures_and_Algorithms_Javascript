// Find an object in an array of objects
// You want to find an employee in the array of all employees


// Array of employee - objects
const employees = [
  { name: "Deacon Palmer", email: "deacon@mail.com", position: "Developer" },
  { name: "Hannah Smith", email: "hanna@mail.com", position: "Designer" },
  { name: "Carrie Spooner", email: "carrie@mail.com", position: "CFO" },
  { name: "Eric Petersen", email: "eric@mail.com", position: "Manager" },
  { name: "Sarah Domniguez", email: "sarag@mail.com", position: "CEO" },
]

// Function to find an employee by mail => you could use name as well
// but emails are truly unique
function findEmployeeByMail(email){
    return employees.find(employee => employee.email === email)
}

// Example usage
const foundEmployee = findEmployeeByMail("carrie@mail.com")
if(foundEmployee){
    console.log("Found employee => ", foundEmployee)
} else {
    console.log("No employee listed with that email")
}