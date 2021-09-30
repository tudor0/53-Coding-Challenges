// --- Create a function that receives an array of numbers as argument and returns an
// array containing only the positive numbers ---

// -- Using an outside function --

// function returnPositive(ar) {
//   const f = ar.filter((n) => n >= 0);
//   return f;
// }

// let ar = [1, 2, 3, 4, 5, 6, 7];
// document.write(returnPositive(ar))

// -- Using filter --

// let ar = [1, 2, 3, 4, 5, -1, -2, -4];
// const negnr = ar.filter((n) => n < 0);
// document.write(negnr);

// -- Using map --
// !Returns bool values!

// const ar = [1, 2, 3, -4, -5, -2, -1, 9, -8];
// const map1 = ar.map((q) => q >= 0);
// console.log(map1);
