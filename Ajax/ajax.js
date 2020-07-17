function fetchRandomImage(){
// var xhrRequest= new XMLHttpRequest();
// xhrRequest.onload=function(){
// 	console.log(xhrRequest.response);
// 	var responsejson=JSON.parse(xhrRequest.response);
// 	console.log(responsejson);
// 	var imageURL=responsejson.message;
// 	$('#dog-img').attr('src',imageURL);
// }

// xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
// xhrRequest.send();
	$.ajax({
		url: 'https://dog.ceo/api/breeds/image/rando',
		method:'get',
		success:function(data){
	//console.log(responsejson);
	var imageURL=data.message;
	$('#dog-img').attr('src',imageURL);

		}

	}) .fail(function(){
		console.log("error");
	});
	// $.get('https://dog.ceo/api/breeds/image/random',function(data){

	// 	var imageURL=data.message;
 // 		$('#dog-img').attr('src',imageURL);


	// }).fail(function(xhr,textStatus,errorThrown){
	// 	console.log("Request failed");
	// });
}

$('#fetch-dog').click(fetchRandomImage);