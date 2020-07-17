function showImage(date) {
    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + date + "&api_key=FyTXWvlqWaWt76XhqN9akBtT3Rw7zWUOwu1RV6qw";
    $.get(url, function(data) {
        let photos = data.photos;
        console.log(photos);
        if (photos.length === 0) {
            alert("No photos available for this date");
            return;
        }
        $("#image-container img").remove();

        for (let image = 0; image < photos.length; image++) {
            $('#image-container').append('<img src="' + photos[image].img_src + '" alt="' + photos[image].id + '">');

        }

    });
}
$('#get').click(function(e) {
    e.preventDefault();
    var name = $('#options').val();
    if (name === "") {
        alert("Please Fill the input")
        return;
    } else {
        showImage(name);
    }


});
//FyTXWvlqWaWt76Xh
//$('#image-container')