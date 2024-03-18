"use strict";
// Questinon 49 Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby. 
function logHobbies(...hobbies) {
    // Loops through each hobby in the array
    hobbies.forEach(hobby => {
        // Logs a statement for each hobby
        console.log(`I feel comfortable in  ${hobby}.`);
    });
}
// Calls the function with three hobbies
logHobbies("Palying cricket", "Reading NewsPaper ", "Cooking");
// Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities. Explain & TIP: Template literals support multiline strings, making it easier to create readable text blocks that incorporate variables and expressions.
let myIdealDay = `ideal day involves the following factors:
1. Revieling at 5:00pm sharp and offer my Namaz.
2. Spending few time in Games in evenig.
3. Ending the day by learning and practicing the coding.`;
console.log(myIdealDay);
// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function. Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable. 
function calculateArea(width, height) {
    return width * height;
}
// Refactored into an arrow function
let calculateAreaArrow = (width, height) => width * height;
// Example usage of the arrow function
console.log(calculateAreaArrow(10, 12)); // Logs the area of the rectangle
