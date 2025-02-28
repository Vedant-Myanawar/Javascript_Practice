const marvalHeros = ["thoor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

// marvalHeros.push(dc)

// console.log(marvalHeros);
// console.log(marvalHeros[3][1]);

// const allHeros = marvalHeros.concat(dc)
// console.log(allHeros);

const allNewHeros = [...marvalHeros,...dc]

// console.log(allNewHeros)

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

let realAnotherArray = anotherArray.flat(Infinity)

console.log(realAnotherArray);

console.log(Array.isArray("Vedant"));
console.log(Array.from("Vedant"));

console.log(Array.from({name:"Vedant"})) //Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

