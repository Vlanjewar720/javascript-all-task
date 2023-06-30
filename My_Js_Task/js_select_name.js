
function pecateg(){
   let a = document.getElementById("people").value;

  if (a == "Indian Actors") {
      var array = ["choose name ","Salman Khan","Ritik Roshan", "Akshay Kumar", "Varun Dhavan"];
  }
  else if (a == "Indian Leaders") {
      var array = ["Mahatma Gandhi", "Dr.Ambedkar", "Bhagt Singh"];
  }
  else if (a == "Indian Sportman") {
      var array = ["Mahindra singh ", "Virat Kolhi", "PV sindhu"];
  }
  else if (a == "Indian Bissnesman") {
      var array = ["Mukesh Ambani", "Ratan TaTa", "Gautam Adani"];
  }
  else {
      var array = ["choose people"];
  }

  var string = "";
  for (var i = 0; i<array.length; i++) {
      string = string + "<option>" + array[i] + "</option>";
  }
  document.getElementById("pname").innerHTML = "<select>" + string + "</select>";
         
}

      document.addEventListener("click",()=>{  
        // function act(){
       var pnm= document.getElementById("pname").value;

       if (pnm == 'Salman Khan')
          {
              document.getElementById("salm").hidden=false;
          

               document.getElementById("ritik").hidden=true;
               document.getElementById("akys").hidden=true;
              
              
          }
          else if(pnm == 'Ritik Roshan'){
             document.getElementById("salm").hidden=true;
             document.getElementById("akys").hidden=true;

              document.getElementById("ritik").hidden=false;
              
              
          }
          else if(pnm == 'Akshay Kumar'){
             document.getElementById("ritik").hidden=true;
             document.getElementById("salm").hidden=true;

              document.getElementById("akys").hidden=false;


       }
       else{
        // document.getElementById("name").innerHTML="Not Available";
       }


})