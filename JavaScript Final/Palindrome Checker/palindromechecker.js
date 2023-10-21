function palindrome(str) {
    var back = '';
    var front = '';

    for (var i = str.length - 1, n = 0; i <= 0, n < str.length; i--, n++) {
        if (str[i].match(/[A-Za-z0-9]/g)) {
            back += str[i].toLowerCase();
        }

        if (str[n].match(/[A-Za-z0-9]/g)) {
            front += str[n].toLowerCase();
        }
    }

if (front.replace(" ", "") != back.replace(" ", "")) {
        return false;
    }
    if (front.replace(" ", "") == back.replace(" ", "")) {
        return true;
    }
}

