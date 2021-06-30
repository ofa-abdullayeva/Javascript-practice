var numbers=[45,100,23,48,76,87,123,547];

document.getElementById('result').innerHTML=numbers;

function sortArray(){

    numbers.sort(function(x,y){
        return y-x;  // Azalan sira ile duzur
        
    });
    document.getElementById('result2').innerHTML=numbers;
}

sortArray();

function sortArrayy(){

    numbers.sort(function(x,y){
        return x-y;  // Artan sira ile duzur
        
    });
    document.getElementById('result3').innerHTML=numbers;
}

sortArrayy();
