// print out the n-th entry in the fibonacci series
// [0,1,1,2,3,5,8,13]
// [0,1,Fn-1, Fn-1 + Fn-2, ......]
// fib(4) === 3
// Fn = Fn-1 + Fn-2 -> mathematic equation when n>2
function fib (n) {
  if (n < 2) {
    return n
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}
fib(4) // -> 3

// using yield key word
function * fib (n, current = 0, next = 1) {
  if (n === 0) {
    return current
  }
  yield current
  yield * fib(n - 1, next, current + next)
}

let fibSeries = [...fib(4)]
fibSeries
// [0, 1, 1, 2]
