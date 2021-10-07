function sumAll(arr) {
  let min, max;
  if  (arr[0] > arr[1]) {
    min = arr[1]
    max = arr[0]
  } else {
    max = arr[1]
    min = arr[0]
  }

   let sum = 0;  //variable called 'sum'. initialized it with '0'
   for ( let i = min; i <= max; i++) {
     sum += i
   }

   return sum;

}

console.log(sumAll([2, 4]), "<===result");