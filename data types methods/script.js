
let value;

const firstName = "Louis" ;
const lastName = "Armstrong";


value = firstName + lastName;
value = firstName + " " + lastName;

value= "Mustafa Murat ";
value +="Coskun";  //value = value + "Coskun"
value = firstName.length;


//String methodlari


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

console.log(value)