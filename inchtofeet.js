// var myinches = 12;
// var incheToFeet = myinches /12;
// console.log(incheToFeet);


// var dadaInches = 144;
// var dadaIncheToFeet = dadaInches / 12;
// console.log(dadaIncheToFeet); 

// var dadiInche = 60;
// var dadiIncheToFeet = dadiInche / 12;
// console.log(dadiIncheToFeet);

function incheToFeet(inches){
     const feet = inches / 12;
     return feet;
}

const myinches = 120;
const myFeet = incheToFeet(myinches)
console.log(myFeet);

const dadaInches = 160;
const dadaFeet = incheToFeet(dadaInches)
console.log('dada feet', dadaFeet);