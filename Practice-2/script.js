var numbers=[45,100,23,48,76,87,123,547];

document.getElementById('result').innerHTML=numbers;

function sortArray(){

    numbers.sort(function(x,y){
        return y-x;
    });
    document.getElementById('result2').innerHTML=numbers;
}