var Number1, Number2, Operator, result, answer, True = 0, False = 0;

//Accessing html objects

Number1 = document.getElementById('Number1');
Number2 = document.getElementById('Number2');
Operator = document.getElementById('Operator');
result = document.getElementById('result');
answer = document.getElementById('answer');
True = document.getElementById('True');
False = document.getElementById('False');

//Random number function
function RandomNumber(min,max) {
    var number=Math.floor(Math.random()*(max-min))+min;
    return number;
}

//NewQuestion creating function
function newQuestion(){
    var operation = ["+", "-", "*", "/"];
    Operator.textContent=operation[RandomNumber(0,4)];
    Number1.textContent=RandomNumber(0,50);
    Number2.textContent=RandomNumber(0,50);

    //Condition to perform division without remainder (Qaliqsiz bolme emeliyati ucun sert)

    if (Operator.textContent == "/") {
        while(true) {
            Number2.textContent = RandomNumber(0,50);
            if (Number1.textContent%Number2.textContent==0) {
                break;
            }
        }
    }
}

//Function that asks a new question on page load (Sayfa yuklendiyinde yeni soru soran fonksiyon)
window.onload=function(){
    newQuestion();
}

//When the answer button is pressed, the evaluation process (Cevapla butonuna basildigida deyerlendirme islemi)
answer.onclick=function(){
    var ans,n1,n2;
    n1=Number(Number1.textContent);
    n2=Number(Number2.textContent);
    switch(Operator.textContent){
        case '+' : ans=n1+n2; break;
        case '-' : ans=n1-n2; break;
        case '*' : ans=n1*n2; break;
        case '/' : ans=n1/n2; break;
        default:break;
    }
    if(result.value==ans){
        True.textContent=Number(True.textContent) + 1;
    }else{
        False.textContent=Number(False.textContent) + 1;
    }
    newQuestion();
}
