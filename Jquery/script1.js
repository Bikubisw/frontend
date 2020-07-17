// var para = document.getElementById("para1");
// // para.innerText = "Welcome";
// $('#para1').hide();
// $('#para1').html("WellCome Back Home");
// $("p").html("Welcome to the Lobby");
// $(document).ready(function() {
//     console.log("ready!");
// });
// $("p").remove();

/*
function $(query){
return document.querySelector(query);
}
*/
// css
//$("p").css("fontSize", "100px");
$("p").css({
    fontSize: "30px",
    color: "red"
});
$('div').css({
        height: "100px",
        width: "100px",
        backgroundColor: "cyan"
    })
    // $('div').click(function() {
    //     alert("My name is Bikram Biswas");
    // });
    // $('div').on('click', function() {
    //     var element = $(this);
    //     element.width(element.width() + 10 + 'px');
    //     // alert("My name Is Bikram Biswas");
    // });
$('a').on('click', function(event) {
    event.preventDefault();

    alert("My name Is Bikram Biswas");
});
$("div").click(function() {
    $("input:text").val("fdadgdugadud");
});

console.log($("#para1").position());