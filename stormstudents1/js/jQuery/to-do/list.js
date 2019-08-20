/* 
let x=document.getElementById("")  */
$(document).ready(function(){
   
  $("#btn1").click(function(e){
    e.preventDefault();
    
    $( "li" ).last().append($("input:text").val());
    
  });
});
  