let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // matches the entire phrase "Oh no" only when it has 3 to 6 h's
let result = ohRegex.test(ohStr);