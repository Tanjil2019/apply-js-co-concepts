function facterial(number){
     let result = 1;
     for(let i = number; i >= 1; i--){
          
          result = result * i;
          console.log(i, result);
     }
     return result;
}

const num = 7
const fact = facterial(num)
console.log('Number of fact no',num , fact);