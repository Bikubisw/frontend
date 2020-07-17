var outerbtn = $("#outer")
var toggled = false;
var heading = $(".heading");
$("#inner").click(function() {
    if (!toggled) {
        document.body.style.backgroundColor = "black";
        heading[0].style.color = 'white';
        outerbtn.style.backgroundColor = "white";
        innnerbtn.style.border = "1px solid white";
        innnerbtn.style.marginLeft = "100px";
        toggled = true;
        console.log("Black")
    } else {
        document.body.style.backgroundColor = "white";
        heading[0].style.color = 'black';
        outerbtn.style.backgroundColor = "white";
        innnerbtn.style.marginLeft = "-1px";
        toggled = false;
        console.log("White")

    }
});