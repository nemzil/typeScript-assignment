// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.

function makeShirt (size:string, msg:string) :void {
    console.log(`The shirt's size is ${size} and the message printed on it is "${msg}".`);
}
makeShirt("medium", "eat, sleep, repeat");