
function datecal(){
    
    var eplnm = document.getElementById("empnm").value;
    if(eplnm =='' )
    {
      document.getElementById("ename11").innerHTML="Please enter valid name !";
      // alert("First enter your name Please");
      return false;
    }else if(!(isNaN(eplnm))){
      
      document.getElementById("ename11").innerHTML="Please enter valid name !";
      return false;
    }
 
    var epsal = document.getElementById("empty").value;
     var rate;
     if(epsal == 'Manager')
     {
        rate = 1200;
     }
     else if(epsal == 'Sales')
     {
        rate = 800;
     } else if(epsal == 'Excecutive')
     {
        rate = 500;
     } else if(epsal == 'Labor')
     {
        rate = 300;
     }else{
       document.getElementById("ename13").innerHTML="Please enter valid employee type !";
          // alert('Choose Employee Types')
        return false;
     }

    var d1 = new Date(document.getElementById("strday").value); 
    if(d1 =='' )
    {
      document.getElementById("ename14").innerHTML="Please enter valid date !";
      // alert("First enter your name Please");
      return false;
    }else if((isNaN(d1))){
      
      document.getElementById("ename14").innerHTML="Please enter valid date !";
      return false;
    }
    
    var d2 = new Date(document.getElementById("payday").value); 
        if(d2 =='' )
    {
      document.getElementById("ename15").innerHTML="Please enter valid date !";
      // alert("First enter your name Please");
      return false;
    }else if((isNaN(d2))){
      
      document.getElementById("ename15").innerHTML="Please enter valid date !";
      return false;
    }

    var leavs = document.getElementById("leavday").value;
    if(leavs =='')
    {
     // alert("Please Enter leavs days!!")
     document.getElementById("ename12").innerHTML="Please enter valid number !";
      return false;
    }
    else if(isNaN(leavs)){
      
      document.getElementById("ename12").innerHTML="Please enter valid number !";
      return false;
    }
 
    var diff = d2.getTime() - d1.getTime(); 
    
    var totalday = diff / (1000 * 60 * 60 * 24); 
    var workd = parseInt(totalday) - parseInt(leavs);
    let tsal = parseInt(rate) * parseInt(workd);

  
  document.getElementById("ename").innerHTML=eplnm;
  document.getElementById("emptyp").innerHTML=epsal;
  document.getElementById("emppday").innerHTML=rate;
  document.getElementById("empld").innerHTML=leavs;
  document.getElementById("empwd").innerHTML=workd;
  document.getElementById("emptd").innerHTML=totalday;
  document.getElementById("empsal").innerHTML=tsal;

  
}
//names
  function valid(){
    var eplnm = document.getElementById("empnm").value;
    if(eplnm !='')
     {
        document.getElementById("ename11").innerHTML="";
         return false;
      }
   else if(!(isNaN(eplnm))){
      
       document.getElementById("ename11").innerHTML="";
       return false;
     }
   }
// managers
  function valid1(){
    var epsal = document.getElementById("empty").value;

   if(epsal !='')
    {
   document.getElementById("ename13").innerHTML="";
   return false;
     }
   else if((isNaN(eplnm))){
      
    document.getElementById("ename13").innerHTML="";
    return false;
   }
}
// start date
 function valid2(){
    var d1 = new Date(document.getElementById("strday").value); 

   if(d1 !='')
    {
   document.getElementById("ename14").innerHTML="";
   return false;
     }
   else if(!(isNaN(d1))){
      
    document.getElementById("ename14").innerHTML="";
    return false;
  }
}
// end date
 function valid3(){
    var d2 = new Date(document.getElementById("payday").value); 
    
   if(d2 !='')
    {
   document.getElementById("ename15").innerHTML="";
   return false;
     }
   else if(!(isNaN(d2))){
      
    document.getElementById("ename15").innerHTML="";
    return false;
  }
}
// leave days
 function valid4(){
    var leavs = document.getElementById("leavday").value;

   if(leavs !='')
    {
   document.getElementById("ename12").innerHTML="";
   return false;
     }
   else if(!(isNaN(leavs))){
      
    document.getElementById("ename12").innerHTML="";
    return false;
  }
}