function getvalue()
{
    var roll = document.getElementById('rno').value;
    let text;

if( roll == parseInt(100) || isNaN(roll) && roll=='' )
{
    
    //   document.getElementById('test').innerHTML=roll //for test
    document.getElementById("mytable").hidden=false;
    // document.getElementById("shirt2").hidden=false;
    
    text = "Input OK";
    document.getElementById("demo").innerHTML = text;
}else{
    
    
    document.getElementById("mytable").hidden=true;
    text = "Input not valid";
    document.getElementById("demo").innerHTML = text;
       // document.getElementById("jinse2").hidden=true;
  }
  
}
// enter marks
function tmark()
{
   

    var mark1 = document.getElementById('mark1').value;
    var mark2 = document.getElementById('mark2').value;
    var mark3 = document.getElementById('mark3').value;
    var mark4 = document.getElementById('mark4').value;
    
   
    let sum = parseInt(mark1) + parseInt(mark2) + parseInt(mark3) + parseInt(mark4);
    let per =  sum / 400 * 100;
    let abs = per;
    
    
    document.getElementById("mark5").value = sum;
    document.getElementById("mark6").value = abs;
}

