// ---Create a function that will convert from Fahrenheit to Celsius---

// --Using an outside function--

function convertToC(f) {
  return (f - 32) * 0.5556;
}
let f = 50;
document.write(convertToC(f));
