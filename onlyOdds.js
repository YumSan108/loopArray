//print out only odd numbers
//create an array first
let inputNumbers = [2, 4, 6, 8, 11, 20, 15, 22];

//create a loop
//even numbers will be able to divide by 2 and the remain will be 0
//inputNumbers % 2 == 0

//odd numbers will not be able to divide by 2 and will have remaining number that is greated than 0
//inpuyNumbrtd % 2 !== 0

//since we have to go through a list of numbers, we will either use for loop or while loop
//we will use while loop. Create a code that will run through array length
let i = 0;

//we don't want indext to go over the array length giving us undefined. So setting the limit for it
while (i < inputNumbers.length) {
    if(inputNumbers[i] % 2 !== 0) {
        console.log(inputNumbers[i])
    }
    // we need the i to increase by 1 that way we can go through the whole array until we hit the maximum length
    i++;
}