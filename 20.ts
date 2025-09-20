// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.



let games: string[] = [
  "Valorant",
  "Minesweeper",
  "Chess",
  "Crossword",
  "Scribble"
];

console.log("Some of the games i like to play:");
for (let game of games) {
  console.log(game);
}
