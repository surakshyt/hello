var box= document.querySelector('#box');

var a= 10;
box.style.backgroundColor = "#4caf50";
var setI= setInterval(inc, 100);
function inc(){
   if(a  <= 400){
    box.style.width = a +'px';
    a= a+20;
    

   }else{
   clearInterval(setI);
   }
}
  
   
