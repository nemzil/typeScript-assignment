// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let name2: string = "nemzil nem";

console.log("Lowercase:", name2.toLowerCase());
console.log("Uppercase:", name2.toUpperCase());
console.log("Title Case:", toTitleCase(name2));

function toTitleCase(name:String) : String {
    let n = name.split(" ");
    for (let i = 0; i < n.length; i++) {
        n[i] = n[i].charAt(0).toUpperCase() + n[i].slice(1).toLowerCase();
    }
    return n.join(" ");
}