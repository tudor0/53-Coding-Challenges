//  --- Create a function that will add two positive numbers of indefinite size. The numbers
// are received as strings and the result should be also provided as string. ---

let n1 = [],
  n2 = [];
n1 = ["12345678"];
n2 = ["123123123"];

function addAsString(n1, n2) {
    let result=Number(n1)+Number(n2)
    console.log(typeof(result.toString()))
    return result
    
}

document.write(addAsString(n1, n2));
