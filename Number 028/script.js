// --- Calculate the sum of first 100 prime numbers and return them in an array --- //
// function isPrime(num) {
//   for (var i = 2; i < num/2; i++) if (num % i === 0) return false;
//   return true;
// }
// const prime = (n) => {
//   let i1 = 0;
//   let ar = [],
//     suma = 0;
//   while (i1 !== n) {
//     if (isPrime(i1) !== false) {
//       ar.push(i1);
//       suma += i1;

//     }

//   }
//   document.write(`The sum is ${suma} and the numbers are ${ar}`);
// };

// prime(2);

function isPrime(number) {
  if (number <= 1) return false;
  if (number === 2) return true;
  else {
    for (let i = 2; i < Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
}
console.log(isPrime(6)); //false

function getNprimes(n) {
  const arr = [];
  let i = 2;
  while (arr.length < n) {
    if (isPrime(i)) {
      arr.push(i);
    }
    i++;
  }
  return arr;
}
console.log(getNprimes(5)); //[2, 3, 5, 7, 11]

const sumOfNPrimes = (num) => {
  let sum = getNprimes(num);
  if (sum === 0) {
    sum = getNprimes(num + 1);
    return sum;
  }
};
console.log(sumOfNPrimes(4));
