function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments, 1);
    var array = [];

    for (let i = 0; i < arr.length; i++) {
        var counter = 0;
        for (let n = 0; n < args.length; n++) {
            if (arr[i] != args[n]) {
                counter++
            }
            else {
            }
        }
        if (counter === args.length) {
            array.push(arr[i])
        }
    }
    return array;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); z

//Alternative
function destroyer(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
  }