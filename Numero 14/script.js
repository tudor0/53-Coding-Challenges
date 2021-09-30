let a = 0,
  b = 1,
  nextTerm = 0;

function print10(a, b) {
  for (let i = 1; i <= 10; ++i) {
    
    nextTerm = a + b;
    a = b;
    b = nextTerm;
  }document.write(a + " ");
}
print10(a, b);
