// --- Create a function that will find the nth Fibonacci number using recursion ---

function nth() {
  var number = prompt("Enter a number any number");
    if(number===0 || number==1) return document.write(1);
  let a = 0,
    b = 1,
    nextTerm;
  for (let i = 1; i <= number; ++i) {
    nextTerm = a + b;
    a = b;
    b = nextTerm;
  }
  document.write(a);
}
nth();

