function ok()
{
    
    var selt = document.getElementById("selt1").value;
     document.getElementById("br").innerHTML=selt;

     var hobi= document.getElementsByName('hobbies');
     var store="";
     for(var i=0;i < hobi.length ; i++)
     {
        if(hobi[i].checked==true)
        {
            store+=hobi[i].value+' ,';
        }
        document.getElementById('hob').innerHTML=store;
     }
     
   
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