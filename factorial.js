
// for loop
// function factorial(number){
//      let result = 1;
//      for(let i = number; i >= 1 ; i--){
//          result = result * i
//          console.log(i);
//      }
//      return result;
// }
// const number = 8
// const fact = factorial(number)
// console.log('factorial of number :', number, fact);


// while loop

function factorial (number){
    let result = 1
    i = number;
    while(i >= 1){
        result = result * i;
        console.log(i,result);
        i--;
    }
    return result;

}
const number = 7
const fact = factorial(number)
console.log('factorial of number:', fact);