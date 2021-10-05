//  --- Calculate the sum of numbers received in a comma delimited string ---

const text = document.getElementById("demo");

let array = ("1.2, 1.2, 1.3, 8.5");

function suma(str) {
  let strarr = str.split(",");
  console.log("Split la array "  + strarr)
  let suma = strarr.reduce(function (total, num) {
    return parseFloat(total) + parseFloat(num);
  });
  return suma;
}

text.textContent=(suma(array));
