     //-------------switch--------------

     // //saat 5 dise kursun qapisi aciqdi,6 1saat sora gel,7 dise vaxtinda gelmisen 8 dise gecikmisen
      // let  kurs = 6
      // switch(kurs){
      //     case 5:
      //     console.log("Kursun qapisi aciqdi")
      //     break;
      //     case 6:
      //     console.log("1 saat sonra gel")
      //     break;
      //     case 7:
      //     console.log("Vaxtinda gelmisen")
      //     break;
      //     case 8:
      //     console.log("gecikmisen")
      //     break;
      //     default:
      //     console.log("Xos gelmisiz")

      //     break;
      // }

    //   var model = 'Iphone'



    //-------------If Else--------------

    //   if (model=='Samsung'){
    //       console.log('Its a brand');
    //   } else if(model =='Xiaomi' || model =='Nokia' || model =='Huawei'){
    //       console.log('They are brand new models');
    //   }else{
    //       console.log('Go and buy a phone');
    //   }

    //-------------For--------------

    // for (var i = 0; i < 5; i++ ){
    //   console.log(i + 'qurtum')
    // }


    // for(var i = 1; i<=10; i ++ ){  // 1-den 10 qeder reqemleri yazdirmaq
    //   console.log(i + ' reqem')
    // }


    // var arr = [10,25,6,9]
    //  var cem = 0
    //  for(var i = 0; i<arr.length; i++){ // arrayleri toplamaq
    //    cem +=arr[i]
    //  };

    //  console.log(cem);

    // var cem = 0
    // for (i=0;i<=5;i++){    // 1-den 5 qeder reqemleri toplamaq
    //   cem +=i
    // }
    // console.log(cem)

  //  //---------------------for of------------------
  //   var ededler = [5,2,36,9,20]; ededin ozunu gotururse numerable
    
  //   for(eded of ededler){   //butun ededleri tek tek 10 ile cemlemek
  //     eded = eded  + 10;
  //     console.log(eded)
  //   }
    

    
  //  //---------------------for in------------------
  //  var ededler = [5,2,36,9,20]; // indexsin ozunu gotururse itereble
    
  //  for(eded in ededler){   //butun ededlerin indexlerini tek tek 10 ile cemlemek(string olaraq birlesdirir)
  //    eded = eded  + 10;
  //    console.log(eded)
  //  }

  //    var ededler = [5,2,36,9,20];
  //    var yeniededler = ededler.slice(0,4);
    
  //  for(eded in yeniededler){   //butun ededlerin indexlerini tek tek 10 ile cemlemek(string olaraq birlesdirir)
     
  //    console.log(eded=eded + 5)
  //  }








  //------------------Function---------------

      // function declaration  -  hoists

      // function getNumber (a,b){
      //   return a*b
      // }
      // console.log(getNumber(8,4))




    //   // function expression
    //   var foo = function(){
    //    console.log('Good day')
    //  }

    //  foo()

    // //Arrow funcion
    //   let x = () =>{

    //   }
  ///-------------en boyuk reqemi tapmaq--------------
    // var a = [1,2,3,7,45,9,10]
    //  var max = 0

    //  for(let i = 1;i<a.length;i++){
    //    if(a[i]>max){
    //      max = a[i]
    //    }
    //  }
    //  console.log(max);

    //================ Sonuncu yazilan 6_nin indexi=sini gosterin
    var a = [1,2,3,4,5,6,6,10,6,10,20,25]

    var index = 0

    for(let i=0;i<a.length;i++){
      if(a[i]===6){
        index = i
      }

    }
    console.log(index)