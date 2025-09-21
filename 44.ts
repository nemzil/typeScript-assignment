// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.

function makeSandwich(...items: string[]): void {
    console.log("You ordered a sandwich with the following items:");
    for (const item of items) {
        console.log(item);
    }
}

makeSandwich("Lettuce", "Tomato", "Cheese");
makeSandwich("Cheese", "Olives", "Piclles", "Mayo");
makeSandwich("Pickles", "Olives");

