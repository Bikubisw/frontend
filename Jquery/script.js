$.get('https://dog.ceo/api/breeds/list/all', function(data) {
    var imageURL = data.message;
    console.log(imageURL);


});