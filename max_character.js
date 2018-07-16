
function maxChar(str) {
    let charMap = {}
    let max = 0
    let maxChar = ''
    // make a loop to iterate over the 
    // char of a string then if the char is already exists
    // then increase the number in the dic by 1
    // else put the number of char to be equal 1
    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
    // { a: 1, b: 1, c: 7, d: 1 }
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}
// maxChar("abcccccccd") //=== "c"
// maxChar("apple 1231111") //=== "1"