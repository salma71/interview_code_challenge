function wave(str) {
    let result = [];
    str.split('').forEach(function (letter, i) {
        let str_arr = str.split('')
        if (/[a-z]/.test(letter)) {
            str_arr[i] = str_arr[i].toUpperCase()
            result.push(str_arr.join(''))
        }
    })
    return result;
}

console.log(wave("hello"))
// [ 'Hello', 'hEllo', 'heLlo', 'helLo', 'hellO' ]

// function wave(str) {
//     let result = [];

//     str.split("").forEach((char, index) => {
//         if (/[a-z]/.test(char)) {
//             result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
//         }
//     });

//     return result;
// }