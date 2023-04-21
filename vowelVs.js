// Create a JavaScript code that accepts a string of lowercase letters. Print the word followed by how many consonants and vowels it has.
// "a", "e", "i", "o", and "u" are considered vowels. 

// First, we will create array of vowels.
let vowels = ['a', 'e', 'i', 'o', 'u'];

// Second, we have to count number of vowels and consonants so we create 2 variables
let countV = 0;
let countC = 0;

// Third, we will have an example string that consists both vowels and consonant
let exampleStr = "Automosphere";

// Fourth, we will have a loop counter
let i = 0;

while (i < exampleStr.length) {
    // to get current characters
    let char = exampleStr[i];

    // to check if current characters are vowels
    if (vowels.includes(char)) {
        // if it is vowels, it will count
        countV++;
    } else {
        // if it is consonants, it will count
        countC++;
    }
    // loop counter will increase by +1 until it becomes less than the arry length
    i++;
}

console.log(`The word "${exampleStr}" has ${countC} consonants and ${countV} vowels`);