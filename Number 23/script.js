let string = "tudor";
let ar = [1, 2, 3, 4];
// --- Using recursion ---

// function reverse(string) {
//   if (string === "") return "";
//   else return reverse(string.substr(1)) + string.charAt(0);
// }
// console.log(reverse(string));

// --- for loop ---

function rev(str) {
  let newstr = "";
  for (let i = str.lenght - 1; i >= 0; i--) {
    newstr += str [ i ];
  }
  console.log(newstr);
}
rev(string);
