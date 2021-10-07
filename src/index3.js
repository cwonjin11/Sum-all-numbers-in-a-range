function sumAll(arr) {
     let sum = 0;  //variable called 'sum'. initialized it with '0'
     for (let i = Math.min(... arr); i <= Math.max(... arr); i++) {
        sum += i
     }

     return sum;
  
  }
  
  console.log(sumAll([4, 1]), "<===result using Math.min(), Math.max()");