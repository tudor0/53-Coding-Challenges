//  --- Implement the Caesar cypher ---

// transform litera in ascii, adaug 2 si o transform la loc, se afiseaza

// const array = "zzzzz";
// const almost = [],
//   final = [];
// console.log(`Inputul initial a fost "${array}"`);
// const splitInput = array.split("");
// console.log(`Cuvantul impartit este "${splitInput}"`);
// splitInput.forEach((element) => {
//   if (element.charCodeAt() + 13 <= 90) {
//     almost.push(element.charCodeAt() + 2);
//   }
//   else {

//   }
// });
// almost.forEach((element) => final.push(String.fromCharCode(element)));
// console.log(`Textul criptat este "${final.join().replace(/,/g, "")}"`);









// var caesarShift = function (str, amount) {
//   // Wrap the amount
//   if (amount < 0) {
//     return caesarShift(str, amount + 26);
//   }

//   // Make an output variable
//   var output = "";

//   // Go through each character
//   for (var i = 0; i < str.length; i++) {
//     // Get the character we'll be appending
//     var c = str[i];

//     // If it's a letter...
//     if (c.match(/[a-z]/i)) {
//       // Get its code
//       var code = str.charCodeAt(i);

//       // Uppercase letters
//       if (code >= 65 && code <= 90) {
//         c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
//       }

//       // Lowercase letters
//       else if (code >= 97 && code <= 122) {
//         c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
//       }
//     }

//     // Append
//     output += c;
//   }

//   // All done!
//   return output;
// };
// console.log(caesarShift("tudor", 2));
