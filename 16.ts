// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.



// q15 part
let guests: string[] = ["Oscar Wilde", "Levy Rozman", "Christan Bale"];
for (let guest of guests) {
  console.log(`Hey ${guest}, I'd love to have you over for dinner tonight!`);
}


let unableToAttend = guests[1];
console.log("\n" + unableToAttend + " can’t make it to the dinner.\n");

guests[1] = "Hikaru Nakamura";

for (let guest of guests) {
  console.log(`Hey ${guest}, I'd love to have you over for dinner tonight!`);
}

// -- 16 starts
console.log("\nGood news! I found a bigger dinner table.\n");
guests.unshift("Elon Musk");
guests.splice(Math.floor(guests.length / 2), 0, "Nikola Tesla");
guests.push("Ada Lovelace");

for (let guest of guests) {
  console.log(`Hey ${guest}, I'd love to have you over for dinner tonight!`);
}
