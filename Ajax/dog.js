var dogcontain=$('#dog-image');
var options=$('#options');
var allowSubmit = true;
var breed;
$.get('https://dog.ceo/api/breeds/list/all',function(data){
	let imageURL=data.message;
	for(let breed in imageURL){
		options.append('<option value="'+ breed +'">' +breed+ '</option>');

	}


});
options.change(function() {
allowSubmit=true;
});
$('#get').click(function(e){
e.preventDefault();
if(allowSubmit){
	breed=options.val();
	showImage(breed);
	allowSubmit=false;
}
});
$("#next").click(function (e) {
    e.preventDefault();
    if (breed !== undefined) {
        showImage(breed);
    }
});


function showImage(breed){
	let url='https://dog.ceo/api/breed/' + breed + '/images/random';
	$('#dog-image img').remove();
	$.get(url,function(data,status){
		var image=data.message;
		//console.log(image);
		dogcontain.append('<img src="' + image + '" alt="' + breed + '">');

	});

}