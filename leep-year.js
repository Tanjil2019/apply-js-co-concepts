// function isLeepYear (year){
//      const remainder = year % 4;
//      if(remainder === 0){
//         console.log('This is leep year');
//      }
//      else{
//           console.log('this is Not leep year');
//      }
// }
// isLeepYear(2020)
// isLeepYear(2025)



// function isLeepYear (year){
//      const remainder = year % 4;
//      if(remainder === 0){
//       return true;
//      }
//      else{
//      return  false;
//      }
// }
// const itsleepYear = isLeepYear(2020)
// console.log(itsleepYear);
// const itsNotLeepYear = isLeepYear(2025)
// console.log(itsNotLeepYear);

function isLeepYear (year){
     const remainder = year % 4;
     if(remainder === 0){
      return true;
     }
     return  false;
}
const itsleepYear = isLeepYear(2020)
console.log(itsleepYear);
const itsNotLeepYear = isLeepYear(2025)
console.log(itsNotLeepYear);