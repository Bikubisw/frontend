var dogcontain=$('#image-container');
var options=$('#options');
// var subbreedoptions=$('#subbreed_list');
var allowSubmit = true;
var breed;
$.get('https://dog.ceo/api/breeds/list/all',function(data){
	let imageURL=data.message;
	for(let breed in imageURL){
		options.append('<option value="'+ breed +'">' +breed+ '</option>');

	}


});
options.change(function(event) {
	let breed = options.val();
    let url = "https://dog.ceo/api/breed/" + breed + "/list";

    $("#dog-sub-breeds").remove();

    $.get(url, function (data) {

        if (data.message.length !== 0) {
            let subBreeds = data.message;

            options.after('<select id="dog-sub-breeds"></select>');

            var subDropdown = $("#dog-sub-breeds");

            for (let subBreed of subBreeds) {
                subDropdown.append('<option value="' + subBreed + '">' + subBreed + '</option>');
                console.log(subBreed);
            }
        }

    });	
});

$('#get').click(function(e){
	e.preventDefault();
	var breed=options.val();
	var subbreed=$('#dog-sub-breeds').val();
	let url='https://dog.ceo/api/breed/'+breed;
	if(subbreed!==undefined){

		url+='/'+subbreed;
	}
	url+='/images';
	 $("#image-container img").remove();
    
    $.get(url, function (data) {
        let imagesUrl = data.message;

        for (let imageUrl of imagesUrl) {
            dogcontain.append('<img src="' + imageUrl + '" alt="' + breed + '">');
        }
    });













});
