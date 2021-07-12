const kqVugar = 100;
const kqOfeliya = 52;

const heightVugar =1.78;
const heighOfeliya =1.61;

indexVugar = (kqVugar) / (heightVugar*heightVugar);
indexOfeliya = (kqOfeliya) / (heighOfeliya*heighOfeliya);

console.log(indexVugar,indexOfeliya);


//   0 - 18.4: Ariq
//  18.5 - 24.9: normal
//  25.0 - 29.9: artiq cekili
//  30.0 - 34.9:  gombul 


let OfeliyaAriq = (indexOfeliya>=0) && (indexOfeliya<=18.4);
let OfeliyaNormal = (indexOfeliya>=18.5) && (indexOfeliya<=24.9);
let OfeliyaArtiqcekili = (indexOfeliya>=25.0) && (indexOfeliya<=29.9);
let OfeliyaGombul = (indexOfeliya>=30.0) && (indexOfeliya<=34.9);

console.log("Ofeliya Ariq :" +OfeliyaAriq);
console.log("Ofeliya'nin cekisi normal' :" +OfeliyaNormal);
console.log("Ofeliya'nin cekisi artiq cekili' :" +OfeliyaArtiqcekili);
console.log("Ofeliya gombul' :" +OfeliyaGombul);


let VugarAriq = (indexVugar>=0) && (indexVugar<=18.4);
let VugarNormal = (indexVugar>=18.5) && (indexVugar<=24.9);
let VugarArtiqcekili = (indexVugar>=25.0) && (indexVugar<=29.9);
let VugarGombul = (indexVugar>=30.0) && (indexVugar<=34.9);

console.log("Vugar Ariq :" +VugarAriq);
console.log("Vugar'in cekisi normal' :" +VugarNormal);
console.log("Vugar'in cekisi artiq cekili' :" +VugarArtiqcekili);
console.log("Vugar gombul' :" +VugarGombul);