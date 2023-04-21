// Create a JavaScript code that prints each number from 1 to 100 on a new line.

// For each multiple of 3, print "Fizz" instead of the number.

// For each multiple of 5, print "Buzz" instead of the number.

// For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

// Since we have to count from 1 to 100, we will create a for loop to count the numbers
for (let i = 0; i <= 100; i++) {
    // we will need to print out FizzBuzz when the remaining of i is strctly equal to 0 when divided by 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}