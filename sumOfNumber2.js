// 1 + 2 + 3 + 4 + 5 + 6 + 7 ?

 let sum = 0;
for (var i = 1; i <= 7; i++){
     
     sum = sum + i;
     // console.log(i,sum);
}



// function

// function sumOfNumbers(number){
//      let sum = 0;
//      for(var i = 1; i <= number; i++){
//           sum = sum + i
//           console.log(i, sum);
//      }
// }

// const result = sumOfNumbers(7)
// console.log(result);





function facterial(number){
     let multi = 1;
     for(var i = 1; i <= number; i++){
          multi = multi * i
          // console.log( multi);
     }
     return multi;
}

const result = facterial(9)
console.log(result);