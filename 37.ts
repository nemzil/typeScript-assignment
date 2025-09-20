// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.

function makeShirt (size:string="large", msg:string="i love typeScript") :void {
    console.log(`The shirt's size is ${size} and the message printed on it is "${msg}".`);
}
makeShirt();
makeShirt("Medium");
makeShirt("Small", "Coding is life!");
