//  1 * 2 * 3 * 4 * 5 * 6 * 7


function sumOfNumbers(numbers){
     let result = 1;
     for(let i = 1; i <= numbers; i++){
          const index = i;
         result = result * index
     
     }
     return result;
}
const resultMulti = sumOfNumbers(9)
console.log(resultMulti);