
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
    
    if(d1=='' || d1==null)
    {
      alert("Enter start date Please");
      return false;
    }
    var d2 = new Date(document.getElementById("payday").value); 
    if(d2 =='' || d2 ==null )
    {
      alert("Enter pay day Please")
      return false;
    }
    var leavs = document.getElementById("leavday").value;
    if(leavs =='')
    {
     // alert("Please Enter leavs days!!")
     document.getElementById("ename12").innerHTML="Please enter valid name !";
      return false;
    }
    else if(isNaN(leavs)){
      
      document.getElementById("ename12").innerHTML="Please enter valid number !";
      return false;
    }
 
    
    var diff = d2.getTime() - d1.getTime(); 
    
    var daydiff = diff / (1000 * 60 * 60 * 24); 
    var leada = parseInt(daydiff) - parseInt(leavs);
    let tsal = parseInt(rate) * parseInt(leada);

    //document.write(" Total number of days <b> " + daydiff + " after leave days </b>" + leada +" Total payment "+ tsal ); 

  document.getElementById("ename").innerHTML=eplnm;
  document.getElementById("emptyp").innerHTML=epsal;
  document.getElementById("emppday").innerHTML=rate;
  document.getElementById("empld").innerHTML=leavs;
  document.getElementById("empwd").innerHTML=leada;
  document.getElementById("emptd").innerHTML=daydiff;
  document.getElementById("empsal").innerHTML=tsal;

  //document.getElementById("empd2").innerHTML=(" Total number of days <b> " + daydiff + "<br> after leave days </b>" + leada +"<br> Total payment "+ tsal ); 
 
}