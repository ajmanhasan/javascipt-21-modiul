  function evenNum(numbers){
    const evens = [];
  for(const number of numbers){
        if(number % 2 === 0){
     console.log(number);
     evens.push(number)
    
    }
        } 
        return evens;
  }


  const numbers = [3, 4, 2, 4, 23,534,23,24,53, 7];
  const evens = evenNum(numbers);
   console.log('even number', evens);