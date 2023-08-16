function isEvenNumber (number){
     const remainder = number % 2;
     if(remainder === 0){
          return true;
     }
     else{
          return false;
     }
}
const myEvenNumber = isEvenNumber(33)
console.log(myEvenNumber);
const herEvenNumber = isEvenNumber(334)
console.log(herEvenNumber);
