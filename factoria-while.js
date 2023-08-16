function facterial(number){

     let result = 1;
     let i = number;
     while(i >= 1){
          result = result * i;
          // console.log(i, result);
          i--;
     }
     return result;
}
const num = 7
const fact = facterial(num)
console.log('facterial number',num , fact);