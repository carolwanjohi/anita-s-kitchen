// Front-end
$(document).ready(function() {
    // Change opacity on hover
    $("#breakfast").hover( function(){
        $(this).stop().animate({ opacity: 0.75 }, "fast").css("color", "black"); //on mouse hover
    },
    function() {
        $(this).stop().animate({ opacity: 1.0 }, "fast").css("color", "white"); //on mouse out
    // });
    });

    $("#lunch").hover( function(){
        $(this).stop().animate({ opacity: 0.75 }, "fast").css("color", "black"); //on mouse hover
    },
    function() {
        $(this).stop().animate({ opacity: 1.0 }, "fast").css("color", "white"); //on mouse out
    // });
    });

    $("#dinner").hover( function(){
        $(this).stop().animate({ opacity: 0.75 }, "fast").css("color", "black"); //on mouse hover
    },
    function() {
        $(this).stop().animate({ opacity: 1.0 }, "fast").css("color", "white"); //on mouse out
    // });
    });
});