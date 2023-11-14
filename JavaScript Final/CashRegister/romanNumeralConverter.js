function table(currentNumber) {

    const lookUp = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1,
    }
    
    for (let [key, value] of Object.entries(lookUp)) {

        if (value < currentNumber) {
            return [key, value, false]
        }

        if (value === currentNumber) {
            return [key, value, true]
        }
    }
}

function convertToRoman(num) {

    var match = perfectMatch(num)
    var currentValue = num
    var romanNumeral = []

    if (match) {
        return match[1]
    }
    else {
        while (currentValue > 0) {
            let result = table(currentValue)
            romanNumeral.push(result[0])
            currentValue -= result[1]
        }
        return romanNumeral.join('')
    }
}

function perfectMatch(num) {

    let result = table(num)
    if (result[2] === true) { return [true, result[0]] }

}

convertToRoman(97);

