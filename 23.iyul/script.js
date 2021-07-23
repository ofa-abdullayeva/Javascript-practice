//
// let x= 2

// function foo(y){
//     console.log('a',x)
//     x=1;
//     return x+=y;
   
// }
//  console.log('b',x);
// foo(4);
// // foo(4);

// console.log('c',x);


//cut ededleri qaytar
// let elements = [1,2,4,6,8,9,15,17];

//  var newitems = elements.filter((item)=>{
//      return item%2==0
//  })
//  console.log(newitems)

 
//tek ededleri qaytar
let elements = [1,2,4,6,8,9,15,17];

var newitems = elements.filter((item)=>{
    return item%2==1
})
console.log(newitems)