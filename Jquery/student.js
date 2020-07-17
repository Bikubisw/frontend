var box=$("#studentdetails");

//console.log(rollno,name,marks);
$('button').click(function(event){
	event.preventDefault();


var  rollno=$('.roll').val();
var name=$('.name').val();
var marks=$('.marks').val();
	if(rollno=="" || name=="" || marks==""){
alert("Please fill all fields");
return;
}


 rollno=$('.roll').val();
 console.log(rollno);

 name=$('.name').val();
  console.log(name);

 marks=$('.marks').val();
  console.log(marks);

box.append('<div class="details"><h3>Roll no - <span> '+ rollno +'</span> , <span>' + name+ '</span> has scored <span>' +marks+' </span></h3></div>');
//box.append('<div id="details"> </div>');

});

