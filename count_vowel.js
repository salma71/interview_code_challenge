// write a function that returns the number of vowels in 
// a string 
function vowel_count(str){
    let counter = 0;
    const vowel_char = ['a','e','o','i','u']
    for( let char of str.toLowerCase()) {
        if(vowel_char.includes(char)){
            counter ++
        }
    }
    return counter;
}

    vowel_count("I am very happy") // 4