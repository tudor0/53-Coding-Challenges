// --- Create a function that will return in an array the first “p” prime numbers
// greater than “n” ---
let p = 10,
  n = 10,
  counter = 0;
let ar = [];

const isPrime = (num) => {
  for (let i = 2; i < num / 2; i++) if (num % i === 0) return false;
  ar.push(num);
  ++counter;
};

while (counter != p) {
  n++;
  isPrime(n);
}
document.write(ar);
