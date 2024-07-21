// Step 1: Define the regular expression pattern
const urlRegex = /^https?:\/\/[\w-]+(\.[\w-]+)+([/?#].*)?$/;

// Step 2: Function to check if input matches the regex
function isValidURL(input) {
    return urlRegex.test(input);
}

// Step 3: Test cases to demonstrate the functionality
const testUrls = [
    "http://example.com",
    "https://www.example.com",
    "https://subdomain.example.com/path/to/resource",
    "http://123.456.789.0",
    "http://example.co.in",
    "https://example.com/?q=test",
    "ftp://example.com", // should not match
    "http://example", // should not match
    "https://example" // should not match
];

// Step 4: Check each test case and print the result
testUrls.forEach(url => {
    if (isValidURL(url)) {
        console.log(`${url} is a valid URL.`);
    } else {
        console.log(`${url} is not a valid URL.`);
    }
});
