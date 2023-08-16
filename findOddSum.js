                                             // get sum total

// function getSumAnArray(numbers){
//      let sum = 0;
//      for(let i = 0; i < numbers.length; i++){
//           const index = i; 
//           const elemnt = numbers[i]
//           sum = sum + elemnt;
//           console.log(index, elemnt, sum);
//      }
//      return sum;
     
// }

// const myNumbers = [23, 32, 43, 24, 34, 42, 64, 46];
// getSumAnArray(myNumbers)

                                                // get Odd numbers total sum
// function getOddSumAnArray(numbers){
//      let sum = 0;
//      for(let i = 0; i < numbers.length; i++){
//           const index = i; 
//           const elemnt = numbers[i]
//           if(elemnt % 2 !== 0){
//                console.log(index, elemnt);
//           }
//      }
//      return sum;
     
// }

// const myNumbers = [23, 32, 43, 55, 77, 99, 46];
// getOddSumAnArray(myNumbers)

                                             // Get Even numbers tatal sum
                                                     
function getOddSumAnArray(numbers){
     let sum = 0;
     for(let i = 0; i < numbers.length; i++){
          const index = i; 
          const elemnt = numbers[i]
          if(elemnt % 2 === 0){
               console.log(index, elemnt);
          }
     }
     return sum;
     
}

const myNumbers = [23, 32, 43, 55, 77, 99, 46];
getOddSumAnArray(myNumbers)