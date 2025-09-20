// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.


function Car(manufacturer: string, model: string, options: {[key: string]: any} = {}): object {
    const car = {
        manufacturer,
        model,
        ...options 
    };
    return car;
}

const car1 = Car("Toyota", "Corolla", { color: "red", doors: 4 });
const car2 = Car("Honda", "Civic", { color: "blue", transmission: "manual" });
const car3 = Car("Ford", "Mustang", { color: "black", convertible: true });

console.log(car1);
console.log(car2);
console.log(car3);
