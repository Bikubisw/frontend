 var sec=0;
 var counter=function(){
sec++;
parachange.innerHTML="You have clicked this items"+" "+sec+" "+"times";
}
var button=document.getElementById('div1');
var parachange=document.getElementById('para');
button.addEventListener('click',counter);