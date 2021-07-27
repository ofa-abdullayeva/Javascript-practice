// 1. arrayinda reqemler var, eyni arraydan yeni array yarat, reqemlerin kvadratini yeni arrayda goster
let x = [2,5,6,7,9]

let y = x.map((item)=>{
    return item*item
})
console.log(y)


// 2.arrayin icinde musbet ve menfi ededler var, musbet ededleri topla
let a = [1,-3,-5,4,7,-9,-2,12,23]

let b = a.filter((item)=>{
   return item > 0
    
    
})
console.log(b)
let c = b.reduce((acc,item)=>{
    return item + acc
},0)

console.log(c)


// 3.bir cumle var, o cumlenin her sozunun. bas herflerini birlesdir