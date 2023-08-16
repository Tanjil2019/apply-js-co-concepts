// function sumOfNumbers(numbers){
//      let sum = 0;
//      for(let i = 0; i < 8; i++){
//           const index = i;
//          sum = sum + index
//          console.log(index, sum);
//      }
// }
// sumOfNumbers(7)


// Sum of Number 7



function sumOfNumbers(numbers){
     let sum = 0;
     for(let i = 0; i <= numbers; i++){
          const index = i;
          sum = sum + index
         console.log(index, sum);
     }
     return sum;
}
sumOfNumbers(7)