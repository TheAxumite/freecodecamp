function quickCheck(arr, elem) {
    // checks to see if the element exists and returns its index/position or returns -1 if false
    return arr.indexOf(elem) === -1 ?  false:  true
    
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));