var countInterval;
function startCounter(){
	var number=parseInt(document.getElementById('input-take').value);
	if(isNaN(number)){
		window.alert("Please Enter a Number");
		clearInterval(countInterval);
		return;
	}
	if(number<1||number>99999){
		window.alert("Please Enter a Number In range");
		clearInterval(countInterval);
		return;
	}
	var currentNo=document.querySelectorAll(".count .current");
	var nextNo=document.querySelectorAll(".count .next");
	var count=0;
	countInterval=setInterval(function(){
		if(count===number){
			window.alert("Counter Has Stopped");
			reset(currentNo,nextNo,5);
			clearInterval(countInterval);
			return;
		}
		increase(currentNo,nextNo,4);
		count++;
	},1000);
function reset(currentNo,nextNo,end){
	for(var i=0;i<end;++i){
		currentNo[i].innerText=0;
		nextNo[i].innerText=1;
	}
}
function increase(currentNo,nextNo,index){
	var current=currentNo[index];
	var next=nextNo[index];
	if(current.innerText==9){
		increase(currentNo,nextNo,index-1);
	}
	next.classList.add('animate');
	setTimeout(function(){
	current.innerText=next.innerText;
	next.classList.remove('animate');
	next.innerText=parseInt(next.innerText)+1;
	if(next.innerText>9){
		next.innerText=0;
	}


	},500);
}



















}