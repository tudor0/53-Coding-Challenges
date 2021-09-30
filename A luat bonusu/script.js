// --- Se da 'abcdefg' iar rezultatul final trebuie sa fie ['a', 'a.b', 'a.b.c', 'a.b.c.d', ...] ---

const array = "abcdefgh",
  semafor = 0;
const impartit = array.split("");
console.log(impartit);
const final = [];

for (let i = 0; i < array.length; ++i) {
  if (i === 0) final.push(array[i]);
  else {
    let lastElement = final[i - 1];
    final.push(lastElement + "." + array[i]);
  }
}
console.log(final);
