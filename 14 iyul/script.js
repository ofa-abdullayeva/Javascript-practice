
//=========== Array ve Methodlari ===============//


var elements = [
    {name: 'phone' , price:30},
    {name:'Adapter', price:50},
    {name:'laptop', price:8},
    {name:'cabel', price:3},
    {name:'case', price:9}
]
//================== Array Filter (ozu yeni array yaradir icine filterlenmis deyeri gonderir)==========//

// var filtereditems = elements.filter((item)=>{
//     return item.price > 50
// })
// console.log(filtereditems);


//================================= Filter funksiyasini evez etmek ucun ========================//


// var element = [];
// for(i=0;i<elements.length;i++){

//     if(elements[i].price > 50){
//         element.push(elements[i])
//     }
   
// }
// console.log(element);

// var names = [];
// for(i=0;i<elements.length;i++){
//     if(elements[i].name == 'laptop'){
//         names.push(elements[i])
//     }
// }
// console.log(names);

//============================== Map() funksiyasi (yeni array yaradir ve icini doldurur)=========================//

// var filteredItems = elements
// .map((item)=>{
//     return item.price
// })
// .filter((item)=>{
//     return item>300
// })
// console.log(filteredItems);

//=============================== Map() funksiyasini For of ile evez etmek ===========================//
// var element = []
// for(items of elements){
//    element.push(items)
    
// }
// console.log(element)



//========= Reduce() funksiyasi (iki parametr alir, ikinci parametr yalniz bir defe ,birinci deyer ile toplanir) ===============//

// var calculate  = elements.reduce((acc,item)=>{
//     return item.price + acc
// },0)

// console.log(calculate)

//============  ForEach() ========================//

// var x = elements.forEach((item)=>{
//     console.log(item.price)
// })

//============  Some() ilk dogru aldigi cavabi qaytarir ========================//
// var cheaper = elements.some((item)=>{
//     return item.price<1
// })
// console.log(cheaper)

//============  Every() hamisi dogrudusa qaytarir========================//


// var cheaper = elements.every((item)=>{
//     return item.price<100
// })
// console.log(cheaper)


//========================== Json =======================//

fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(x=>console.log(x))


//================= json post method=================//
fetch('https://jsonplaceholder.typicode.com/users',{


    method:'POST',
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify({
        username:'vugar'
     })
        
})
 .then(res=>{
     return res.json()
}).then(
     x=>console.log(x)
 )
