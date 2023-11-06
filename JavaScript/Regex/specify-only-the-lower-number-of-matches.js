let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Matches only when it has four or more letter z's.
let result = haRegex.test(haStr);