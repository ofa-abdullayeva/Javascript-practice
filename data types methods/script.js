
let value;

const firstName = "Louis" ;
const lastName = "Armstrong";


value = firstName + lastName;
value = firstName + " " + lastName;

value= "Mustafa Murat ";
value +="Coskun";  //value = value + "Coskun"
value = firstName.length;


//----------------String methodlari------------------


value = firstName.concat(" ",lastName," "," Caz"); // Concat method   (Birlesdirmek ucun ist olunur)

value = firstName.toLowerCase();  // toLowerCase (Hamisini kicik herfe cevirir)
value = firstName.toUpperCase();  // toUpperCase  (Hamisini boyuk herfe cevirir)

   //index Of (herfin index nomresini qaytarir)

   value = firstName.indexOf("L");
   value = firstName.indexOf("o")

   //Char At (index uzre herfi tapmaq)


   value = firstName.charAt(0);
   value = firstName.charAt(firstName.length-1); // sonuncunu qaytarir

    const langs = "java,Python,C++"
   //  Split  (Parcalama methodu)

   value = langs.split(",");

   // Replace  (deyistirmek)

   value = langs.replace("Python","Css")

  //Includes (stringin icinde varsa true ,yoxdusa false qaytarir)

  value = langs.includes("java"); //true
  value = langs.includes("javascript"); //false




//----------------Array methodlari------------------


const numbers = [43,56,33,23,44,35,5];

// const nummers2 = new Array[1,2,3,4,5,6,7];

const langs1 = ["Python,Java","C++","JavaScript"];

const a = ["Merhaba",22,null,3.14];

//  Uzunluk
  value = numbers.length;

  //indeks

  value = numbers[0];
  value = numbers[2];
  value = numbers[numbers.length -1];

  //indexse gore deyeri deyismek
  
  numbers[2] = 1000;

  value = numbers;

  //Index Of

  value = numbers.indexOf(1000);

  //  Push (arrayin sonuna number elave etmek)

  numbers.push(2000);
  value = numbers;

  //  unshift    (Evveline elave etmek)


  numbers.unshift(3000);
  value = numbers;

  //  pop  (sondaki eded silinir)

  numbers.pop;
  value = numbers;

  //  shift (evveldeki eded silinir)

  numbers.pop;
  value = numbers;

    //  splice  (0-3 araligindakini silmek)

    numbers.splice(0,3);
    value = numbers;

    //  reverse  (ters cevirir)

    numbers.reverse;
    value = numbers;
  
   //  sort (siralayir ilk reqeme gore)

   numbers.sort();
    
   value = numbers.sort(function(x,y){ //kicikden boyuye siralayir
     return x-y;
   })

   value = numbers.sort(function(x,y){ //bouyukden kiciye siralayir
    return y-x;
  })

//----------------Object methodlari------------------
 


 const programmer = {
   name :"Mustafa Murat Coskun",
   age : 25,
   email:"coskun.m.murat@gamil.com",
   langs :["python","java","javascript"],

   address : {
     city :"Ankara",
     street : "Bahcelievler"
   },

   work : function(){
     console.log("Programci calisiyor...");
   }

 }

 value = programmer;

 value = programmer.email;

 value = programmer.langs;

 value = programmer.address.city;

 value = programmer.work();

//   //----Json  object
//  const programmers [
//    {name : "mustafa murat",age:25},
//    {name : "Oguz",27}
//  ];

//  value = programmers[0].name;



console.log(value)