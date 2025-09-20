// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array


// Equality and Inequality with strings
let car = 'GTR R34';
console.log("Is car == 'GTR R34'? I predict True.");
console.log(car == 'GTR R34');

console.log("Is car != 'Skyline'? I predict True.");
console.log(car != 'Skyline');

console.log("Is car == 'Skyline'? I predict False.");
console.log(car == 'Skyline');

console.log("Is car != 'GTR R34'? I predict False.");
console.log(car != 'GTR R34');

// Lower case function tests
console.log("Is car.toLowerCase() == 'gtr r34'? I predict True.");
console.log(car.toLowerCase() == 'gtr r34');

console.log("Is car.toLowerCase() == 'GTR R34'? I predict False.");
console.log(car.toLowerCase() == 'GTR R34');

// greater than less than tests
let speed = 250;
console.log("Is speed == 250? I predict True.");
console.log(speed == 250);

console.log("Is speed > 200? I predict True.");
console.log(speed > 200);

console.log("Is speed < 200? I predict False.");
console.log(speed < 200);

console.log("Is speed >= 250? I predict True.");
console.log(speed >= 250);

console.log("Is speed <= 200? I predict False.");
console.log(speed <= 200);

// 4. And / Or operators
let isJDM = true, isTurbo = false;
console.log("Is isJDM && !isTurbo? I predict True.");
console.log(isJDM && !isTurbo);

console.log("Is isJDM && isTurbo? I predict False.");
console.log(isJDM && isTurbo);

console.log("Is isJDM || isTurbo? I predict True.");
console.log(isJDM || isTurbo);

console.log("Is !isJDM || isTurbo? I predict False.");
console.log(!isJDM || isTurbo);

// array tests
let brands = ['Nissan', 'Toyota', 'Honda'];
console.log("Is 'Toyota' in brands? I predict True.");
console.log(brands.includes('Toyota'));

console.log("Is 'BMW' in brands? I predict False.");
console.log(brands.includes('BMW'));

console.log("Is 'BMW' NOT in brands? I predict True.");
console.log(!brands.includes('BMW'));

console.log("Is 'Honda' NOT in brands? I predict False.");
console.log(!brands.includes('Honda'));
