// --- Calculate Fibonacci(500) with high precision (all digits) ---
function fib(n) {
    // This is to handle positive and negative numbers
    var sign = n >= 0 ? 1 : -1;
    n = Math.abs(n);

    // Now the usual Fibonacci function
    if(n < 2)
        return sign*n;
    return sign*(fib(n-1) + fib(n-2));
}

// console.log(fib(50))