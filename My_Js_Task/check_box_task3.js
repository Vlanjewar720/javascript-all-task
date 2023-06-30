function ok()
{
    // select element
    var selt = document.getElementById("selt1").value;
     document.getElementById("br").innerHTML=selt;
    
     // chebox
     var hobi= document.getElementsByName('hobbies');
     var store="";
     for(var i=0; i < 4 ; i++)
     {
        if(hobi[i].checked==true)
        {
            store+=hobi[i].value+' ,';
        }
        document.getElementById('hob').innerHTML=store;
     }
     
   //gender
    var gend = document.getElementsByName("Gender");

    var i;
    for(i=0;i<gend.length;i++)
    {
        if(gend[i].checked)
        {
            document.getElementById("gend").innerHTML=gend[i].value;
           // console.log(gend[i].value);
        }
    
    }
}