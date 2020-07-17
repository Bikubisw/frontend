 "use strict";
 outer=document.getElementById("one");
outer.addEventListener('mouseover',function(){
	console.log("Mouse Over");
});
outer.addEventListener('mouseout',function(){
	console.log("Mouse Out");
});

// var searchinput=document.getElementById("search");
// searchinput.addEventListener('keypress',function(){
// console.log("key Press");
// });
document.addEventListener('keydown',function(event){
	console.log(" keydown",event.keyCode);
});