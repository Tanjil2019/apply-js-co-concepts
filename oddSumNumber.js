
function getSumAnArray (numbers){

     let sum = 0;
     for(let i = 0; i < numbers.length; i++){
          const index = i;
          const element = numbers[i]
          sum = sum + element;
          // console.log(index, element, sum);
     }
     return sum;
}

function getOddNumberOfAnArray (numbers){
     let oddNumbers = []
     for(let i = 0; i < numbers.length; i++){
          const index = i;
          const element = numbers[i]
          
          if(element % 2 === 1){
               console.log(index, element);
               oddNumbers.push(element)
          }
     }
     return oddNumbers;
}



const myNumbers = [23, 26, 43, 46, 54, 47, 99, 11];
 const oddNumbers = getOddNumberOfAnArray(myNumbers)
 console.log(oddNumbers);

const oddNumberSum = getSumAnArray(oddNumbers)
console.log(oddNumberSum);