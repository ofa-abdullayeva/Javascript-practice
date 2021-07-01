function noteResult(){

    var midtermNote,finalNote,message, average ;

    midtermNote=Number(document.getElementById('midterm').value);
    finalNote=Number(document.getElementById('final').value);
    average=midtermNote*0.3+finalNote*0.7;

    if(isNaN(midtermNote)){
        message="vize notuna reqem daxil edin";
    }else if(isNaN(finalNote)){
        message="final notuna reqem daxil edin";
    }else{
       message=(average>=60)? "Dersi kecdiniz" : "Dersden qaldiniz";
        
        document.getElementById('result').innerHTML=message
    }
}