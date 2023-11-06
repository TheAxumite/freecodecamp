let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d{2,})/gi; // match passwords that are greater than 5 characters long, and have two consecutive digits.
let result = pwRegex.test(sampleWord);