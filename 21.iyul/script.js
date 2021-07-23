 var students = [
     {name:'Nergiz', techonology: 'React'},
     {name:'Ofeliya', techonology: 'React native'},
     {name:'Nergiz', techonology: 'Svelte'},
     {name:'Kazim', techonology: 'React'},
     {name:'Mugan', techonology: 'Angular'}
 ]

//  var x = students.filter((items)=>{
//     return items.techonology =='Svelte'
//  })
//  console.log(x)


function getResult(x){
    return x.techonology == 'Svelte'
}

var z = students.filter(getResult);
console.log(z)
