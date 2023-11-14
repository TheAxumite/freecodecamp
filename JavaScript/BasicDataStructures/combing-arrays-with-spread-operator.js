function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']
    return sentence;
  }
  
  console.log(spreadOut());

 //Output: [ 'learning', 'to', 'code', 'is', 'fun' ]