var imagecontain=$('#image-container');
$('#get').click(function(e){
e.preventDefault();
let sol=$('#sol').val();
let page=$('#page').val();
if(sol===""||page===""){

	alert("Please Enter the Full Form");
	return;
}
let url='https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol='+sol+'&page='+page+'&api_key=FyTXWvlqWaWt76XhqN9akBtT3Rw7zWUOwu1RV6qw';
   $.get(url, function (data) {
        let photos = data.photos;
        
        if(photos.length === 0 ) {
            alert("No photos available for this sol and page");
            return;
        }
        
        $("#image-container img").remove();

        for (let photo of photos) {
            imagecontain.append('<img src="' + photo.img_src + '" alt="' + photo.id + '">');
        }
    });



});