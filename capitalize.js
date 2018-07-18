// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
function capitalize(str) {

    // let result = [];
    str_arr = str.split(" ")
    // console.log(str_arr)
    // // refactor using map callback function
    return str_arr.map(
        word => word[0].toUpperCase() + word.slice(1)
    ).join(" ")
    // // refactor with forEach callback function
    // str_arr.forEach(
    // 	word => result.push(word[0].toUpperCase() + word.slice(1))
    // 	)
    // // using for of loop
    // for (let word of str_arr){
    // 	result.push(word[0].toUpperCase() + word.slice(1))
    // }
    // return result.join(" ");
}
capitalize('a short sentence') //'A Short Sentence'
