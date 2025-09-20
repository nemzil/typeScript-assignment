const magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette"];

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => "the Great " + magician);
}

console.log("Original magicians:");
showMagicians(magicians);

const greatMagicians = makeGreat(magicians);

console.log("\nGreat magicians:");
showMagicians(greatMagicians);
