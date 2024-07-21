// Step 1: Define the input string
let input = "Hello, World!";

// Step 2: Use setTimeout to delay the execution by 2 seconds
setTimeout(() => {
    // Step 3: Reverse the string
    let reversedString = input.split('').reverse().join('');

    // Step 4: Print the reversed string
    console.log("Reversed string:", reversedString);
}, 2000); // 2000 milliseconds = 2 seconds
