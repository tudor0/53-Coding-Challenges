let ar = [1, 2, 3, 4, 5, 6];
let arinv = [1, 2, 3, 4, 5, 6];

function rotatearRight() {
  let last = ar.pop();
  ar.unshift(last);
  return ar;
}

function rotatearLeft() {
  let first = arinv.shift();
  arinv(first);
  return arinv;
}

rotatearRight(ar);
document.write(ar);

rotatearLeft(arinv);
document.write(arinv);
