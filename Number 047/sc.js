//  --- Deep copy a jagged array with numbers or other arrays in a new array ---

const jagAr = [1, 3, [1, [3, 4, [5, [[[6]]]]]]];

// - Using spread operator -
// const jagar2 = [...jagAr];

// - Using map - 
// const jagar3=jagAr.map(elem => elem)

// - Using foreach - 
const jagar4 = []
jagAr.forEach(elem => jagar4.push(elem))

console.log(jagar4)