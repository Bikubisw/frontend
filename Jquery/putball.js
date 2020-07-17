var colors=['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];
var busket=$('#busket');
$('button').click(function(e){
busket.append('<div class="ball" style="background-color: '+ colors[Math.floor(Math.random()*15)] + '"></div>');

});