
let Data = [
    {name:'Ofeliya',salary:1500},
    {name:'Vugar',salary:1300},
    {name:'Kazim',salary:1400},
    {name:'Nergiz',salary:1400},
    {name:'Mugan',salary:1600}
]

var salaryitem = Data.reduce((acc,item)=>{
    return item.salary + acc
},0)

console.log(salaryitem)