// Find the frequency of letters inside a string. Return the result as an array of
// arrays. Each subarray has 2 elements: letter and number of occurrences.

let ar=['tudortudotrA'];

let counter = str => {
    return str.split('').reduce((total, letter) => {
      total[letter] ? total[letter]++ : total[letter] = 1;
      return total;
    }, {});
  };

  console.log(counter('tudortudotrAa'));