// Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:

// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********
function frameIt(array) {
    let max = 0;
    for (let word of array) {
        if (word.length > max) {
            max = word.length

        }
    }
    console.log("*".repeat(max + 4))
    array.forEach((item, i) => {
        const numberOfSpaces = max - item.length
        // console.log(numberOfSpaces)
        console.log('* ' + item + " ".repeat(numberOfSpaces) + " *")

        // console.log(item)
    })
    console.log("*".repeat(max + 4))
}


frameIt(["Hello", "World", "in", "a", "frame", "Reallylongword", "jgfkdsgjlksdfjklsdjfh"])

// find the longest element in the array 
// I have to check the length of each word 
// take the max length of words in the array 