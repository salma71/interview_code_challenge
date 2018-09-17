// print out the n-th entry in the fibonacci series
//[0,1,1,2,3,5,8,13]
// fib(4) === 3

function fib(n) {
    if (n < 2) {
        return n
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}
fib(4) // -> 3