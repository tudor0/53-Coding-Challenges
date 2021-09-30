// --- Create a function that will return a Boolean specifying if a number is prime ---

// -- Using an outside function --

// --Works--
let n = 7;

function checker(n) {
  for (let i = 2; i <= n/2; ++i) {
    if (n % i === 0) return document.write("false");
  }
  return document.write("true");
}
checker(n);
