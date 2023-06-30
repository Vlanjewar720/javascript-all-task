function ok()
{
 
    var x=  document.getElementById("cloth").value;
    if(x == 'T-Shirt')
    {
        document.getElementById("shirt1").hidden=false;
        document.getElementById("shirt2").hidden=false;

         document.getElementById("jinse1").hidden=true;
          document.getElementById("jinse2").hidden=true;
        return true;
    }
   

    
    else if (x == 'jinsee')
    {
        document.getElementById("jinse1").hidden=false;
        document.getElementById("jinse2").hidden=false;

         document.getElementById("shirt1").hidden=true;
         document.getElementById("shirt2").hidden=true;
        return true;
    }
  
}
function getvalue()
{
     // ietm name
    // var item=document.getElementsByName('inm').value;
    var item = 'T-Shirt'
    document.getElementById('iname').innerHTML=item;
     //item size
    var isize = document.getElementsByName('checkbox');
    for(var i=0;i<isize.length;i++)
    {
        if(isize[i].checked)
        {
            document.getElementById('isize').innerHTML=isize[i].value;
        }
    }

    // item quntity
    var iqty = document.getElementById('qty').value;
    if(iqty=='1')
    {
        var one = document.getElementById('iqut').innerHTML=iqty;
    }
   else if(iqty=='2')
    {
        var one = document.getElementById('iqut').innerHTML=iqty;
    }
    else if(iqty=='3')
    {
        var one = document.getElementById('iqut').innerHTML=iqty;
    }
    else if(iqty=='4')
    {
        var one = document.getElementById('iqut').innerHTML=iqty;
    }
    else if(iqty=='5')
    {
        var one = document.getElementById('iqut').innerHTML=iqty;
    }

     //ietm price
     var itprice= 549;
     document.getElementById('iprice').innerHTML=itprice;
     
     //delevery charge
     var del=50;
     document.getElementById('deliv').innerHTML=del;
     


     // total amount//
     var tamt = parseInt(itprice + del) * parseInt(iqty);
     document.getElementById('tamount').innerHTML=tamt;

     
     
    }
    //reset data
    function closevalue()
    {
        document.getElementById('iname').innerHTML=''
        document.getElementById('isize').innerHTML=''
        var one = document.getElementById('iqut').innerHTML=''
        document.getElementById('iprice').innerHTML=''
        document.getElementById('tamount').innerHTML=''
       document.getElementById('deliv').innerHTML=''

    }