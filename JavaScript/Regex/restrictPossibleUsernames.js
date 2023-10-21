// let userCheck = /^(?=[a-zA-Z]{2,})([a-zA-Z]{2,}|[a-zA-Z]{1,}[0-9$]+)$/; // Change this line
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);