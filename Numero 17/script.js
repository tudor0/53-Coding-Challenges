// ---Calculate the sum of digits of a positive integer number---

// --Using "While"--

// let n = 1234567;
// function digitsum(n) {
//   let sum = 0;
//   while (n) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
//   }
//   document.write(sum);
// }
// digitsum(n);

// --Using strings--

// let n = 123456,
//   sum = n
//     .toString()
//     .split("")
//     .map(Number)
//     .reduce(function (a, b) {
//       return a + b;
//     }, 0);
// console.log(sum);
