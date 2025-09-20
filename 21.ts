// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let car: {
  brand: string;
  model: string;
  generation: string;
  year: number;
  engine: string;
  horsepower: number;
} = {
  brand: "Nissan",
  model: "Skyline GT-R",
  generation: "R34",
  year: 1999,
  engine: "RB26DETT 2.6L Twin-Turbo I6",
  horsepower: 276,
};

console.log("Car Information - Nissan GT-R R34:");
console.log(`Brand: ${car.brand}`);
console.log(`Model: ${car.model}`);
console.log(`Generation: ${car.generation}`);
console.log(`Year: ${car.year}`);
console.log(`Engine: ${car.engine}`);
console.log(`Horsepower: ${car.horsepower} HP`);
