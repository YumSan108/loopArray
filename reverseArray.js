// With a for loop, create a JavaScript code that creates a new array in reverse order.

let originalArray = [1, 3, 5, 7, 9, 11, 13];
let reverseArray = [];

// on for loop, we have to put -1 on the length of array because the length of array is 7 (since there are 7 numbers) but we have to remember the location or counting of array starts with 0. That's why we have to put -1 to make the count work.
for (let i = originalArray.length - 1; i >= 0; i--) {
    // .push() makes the element go to the end 
    reverseArray.push(originalArray[i]); 
}

console.log("Original array: " + originalArray); 

console.log("Reversed array: " + reverseArray);