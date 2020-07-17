//var outerbtn = $("#outer")
var toggled = false;
var heading = $(".heading");
$("#inner").click(function() {
    if (!toggled) {
        //document.body.style.backgroundColor = "black";
        $("body").css('backgroundColor','black');

        //heading[0].style.color = 'white';
        heading.eq(0).css('color', 'white');
        //outerbtn.style.backgroundColor = "white";
        $("#outer").css('backgroundColor', 'white');
        // innnerbtn.style.border = "1px solid white";
        // innnerbtn.style.marginLeft = "100px";
        $("#inner").css({
            border:'1px solid white',
            marginLeft:'100px'
        })
        toggled = true;
        console.log("Black")
    } else {
        //document.body.style.backgroundColor = "white";
                $("body").css('backgroundColor','white');

        heading.eq(0).css('color', 'black');
        $("#outer").css('backgroundColor', 'white');
        $("#inner").css('marginLeft','-1px');
        toggled = false;
        console.log("White")

    }
});