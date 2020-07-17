var buttons=document.getElementsByClassName('button');
var display=document.getElementById('display');
var operand1=0;
var operand2=null;
var operator=null;
for(var i=0;i<buttons.length;i++){
	buttons[i].addEventListener('click',function(){
		var value=this.getAttribute('data-value');

		if(value=='+'){
			operator='+';
			operand1=parseFloat(display.textContent);
			display.innerText="";
		}
		else if(value=='AC'){
			display.innerText="";
		}
		else if(value=='+/-'){
			operand1=display.textContent;
			operand1=-1*operand1;
			display.innerText=operand1;
		}
		else if(value=='%'){
			operand1=parseFloat(display.textContent);
			var ans=operand1/100;
			display.innerText=ans;
			}
		else if(value=='-'){
			operator='-';
			operand1=parseFloat(display.textContent);
			display.innerText="";
		}
		else if(value=='*'){
			operator='*';
			operand1=parseFloat(display.textContent);
			display.innerText="";
		}
		else if(value=='/'){
			operator='/';
			operand1=parseFloat(display.textContent);
			display.innerText="";
		}

		else if(value=='='){
		operand2=parseFloat(display.textContent);
		if(operand2==0&&operator=='/'){
		display.innerText="Cannot Divide by Zero";

		}else{
		var ans=eval(operand1+""+operator+""+operand2);
		if(ans){
		display.innerText=ans;
		  operand1 = ans;
             operand2 = null;
            operator = null;
	}
	else{
		display.innerText=0;
	}
	}

		}
		else{
			display.innerText+=value;

		}

	});
}
document.addEventListener('keydown',function(event){
	var code=event.keyCode;
	var value=this.getAttribute('data-value');


		if(code==107){
			operator='+';
			operand1=parseFloat(display.textContent);
			display.innerText="";
		}
		else if(code==8){
			display.innerText="";
		}
		else if(code=='+/-'){
			operand1=display.textContent;
			operand1=-1*operand1;
			display.innerText=operand1;
		}
		else if(code==53){
			operand1=parseFloat(display.textContent);
			var ans=operand1/100;
			display.innerText=ans;
			}
		else if(code==109){
			operator='-';
			operand1=parseFloat(display.textContent);
			display.innerText="";
		}
		else if(code==106){
			operator='*';
			operand1=parseFloat(display.textContent);
			display.innerText="";
		}
		else if(code==111){
			operator='/';
			operand1=parseFloat(display.textContent);
			display.innerText="";
		}

		else if(code==187){
		operand2=parseFloat(display.textContent);
		if(operand2==0&&operator=='/'){
		display.innerText="Cannot Divide by Zero";

		}else{
		var ans=eval(operand1+""+operator+""+operand2);
		if(ans){
		display.innerText=ans;
		  operand1 = ans;
             operand2 = null;
            operator = null;
	}
	else{
		display.innerText=0;
	}
	}

		}
		else{
			display.innerText+=value;

		}

});
