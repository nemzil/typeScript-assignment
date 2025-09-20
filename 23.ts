// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.



let carModel = 'GTR R34';
let horsepower = 276;
let isJDM = true;
let topSpeed = 250;
let owner = 'Nem';

// True tests
console.log("Is carModel == 'GTR R34'? I predict True.");
console.log(carModel == 'GTR R34'); 

console.log("Is horsepower == 276? I predict True.");
console.log(horsepower == 276);

console.log("Is isJDM == true? I predict True.");
console.log(isJDM == true);

console.log("Is topSpeed > 200? I predict True.");
console.log(topSpeed > 200);

console.log("Is owner == 'Nem'? I predict True.");
console.log(owner == 'Nem');

// False tests
console.log("Is carModel == 'Skyline'? I predict False.");
console.log(carModel == 'Skyline'); 

console.log("Is horsepower > 300? I predict False.");
console.log(horsepower > 300); 

console.log("Is isJDM == false? I predict False.");
console.log(isJDM == false);

console.log("Is topSpeed < 200? I predict False.");
console.log(topSpeed < 200);

console.log("Is owner == 'Brian'? I predict False.");
console.log(owner == 'Brian'); 
