// Step 1: Define the regular expression pattern
const linkedInUrlRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

// Step 2: Function to check if input matches the regex
function isValidLinkedInUrl(url) {
    return linkedInUrlRegex.test(url);
}

// Step 3: Test cases to demonstrate the functionality
const testUrls = [
    "https://www.linkedin.com/in/johndoe123",
    "https://www.linkedin.com/in/jane-smith-abc",
    "https://www.linkedin.com/in/alex_brown_123",
    "https://www.linkedin.com/in/sam-12_34",
    "https://www.linkedin.com/in/emma.wilson",
    "https://www.linkedin.com/in/12345",
    "https://www.linkedin.com/in/short",
    "https://www.linkedin.com/",
    "http://www.linkedin.com/in/johndoe123", // should not match
    "https://www.linkedin.com/johndoe123", // should not match
    "https://www.linkedin.com/in/johndoe123_", // should not match
    "https://www.linkedin.com/in/johndoe123!@#" // should not match
];

// Step 4: Check each test case and print the result
testUrls.forEach(url => {
    if (isValidLinkedInUrl(url)) {
        console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
        console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
});
