// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
function chunk(array, size) {
    const newArr = [];
    let counter = 0;

    while (counter < array.length) {
        newArr.push(array.slice(counter, counter + size));
        counter += size;
    }
    return newArr
}
chunk([1, 2, 3, 4], 2) // --> [[ 1, 2], [3, 4]]

// function chunk(array, size) {
//   const newArr = [];
//
//   for (let element of array) {
//     const last = newArr[newArr.length - 1];
//
//     if (!last || last.length === size) {
//       newArr.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//
//   return newArr;
// }