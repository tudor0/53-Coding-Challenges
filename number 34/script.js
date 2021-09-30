//  --- Create a function that returns an array with words inside a text. ---

const text =
  "I'm selfish, impatient and a little (insecure). I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best";

function splitarr(str) {
  const splitar = str.split(/[!,?,., ,(,)]/);
  return splitar.filter((element) => element !== "");
}
console.log(splitarr(text));
