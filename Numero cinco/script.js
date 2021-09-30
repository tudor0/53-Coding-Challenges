// --- Calculate 10! ---

// - - Using recursion - -

// Failed attempt

// let i = 1;
// var res = 1;
// function factorial(i) {
//   if (i <= 10) {
//     var res = res * i;
//     document.write(` ${i}! is: ${res}`);
//     document.write("<br>");
//     ++i;
//     factorial(i);
//   } else return;
// }
// factorial(i);

// -- Using recursion and while function--

// Failed attempt

// let i = 1, res=1;
// function factorial(i) {
//   while (i <= 10) {
//     res=i * factorial(i++);
//   }
//   return;
// }
// document.write(res);


// Succesfull attempts

// // --Using recursion from top to bottom
// function factorial(n) {
//   if (n == 0 || n == 1) return 1;
//   else {
//     return n * factorial(n - 1);
//   }
// }
// let n = 10;
// let answer = factorial(n);
// document.write(answer);


// --Using a "for" function

// let res = 1;

// for (let i = 1; i <= 10; ++i) {
//   res = res * i;
// }
// document.write(res);
