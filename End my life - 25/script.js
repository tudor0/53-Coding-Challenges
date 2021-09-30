// --- Create a function that will receive two arrays of numbers as arguments and
//return an array composed of all the numbers that are either in the first array
//or second array but not in both ---

function concatar(x, y) {
  let conct1 = [...x];
  let conct2 = [...y];
  for (let i = 0; i < conct2.length; i++) {
    if (conct1.includes(conct2[i]) === false) {
      conct1.push(conct2[i]);
    }
  }
  document.write(conct1);
}
const ar1 = [1, 2, 3, 4, 5, 6];
const ar2 = [4, 5, 6, 7, 8, 9];
const ar = ar1;

concatar(ar1, ar2);
