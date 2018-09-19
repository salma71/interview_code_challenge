# Computational Complexity

Complexity means worest case senario - Big O notation
and Best case senario is known as Omega
f(n) how many units of n required to process the data

## the time complexity ranges from fast to slow as the following:

- O(1) -> constant time
- O(log n) -> logarithmic time : cut into half
- O(n) -> linear time
- O(nlog n) -> linearithmic time
- O(n^2) -> quadratic time
- O(n^c) -> polynomial time
- O(C^n) -> exponential time
- O(n!) -> factorial time
- O(infinity) -> infinite time

## Selection sort

- worst case: O(n^2)
- best case: omega(n^2)

### Pseudocode

- Idea: Find the smallest unsorted element and add it to the sorted list.
- Repeat until no unsorted elements remain.
  1. Find the smallest.
  2. Swap it to the first index
