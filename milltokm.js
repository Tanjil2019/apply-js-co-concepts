function millToKilometers (milles){
     const kilometers = milles / 1.60934;
     return kilometers;
}

const belkuchiToSiraj = 34;
const totalKilometers = millToKilometers(belkuchiToSiraj)
console.log(totalKilometers);

const dhakaToBel = 125;
const dToBKm = millToKilometers(dhakaToBel)
console.log(dToBKm);