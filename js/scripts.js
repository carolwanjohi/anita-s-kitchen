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

    // Subscription message
    $("form#subscribeForm").submit(function(event) {
    var userEmailInput = $("input#subscribeEmail").val();

    if (userEmailInput  === '') {
        alert("Please enter your email address.");
        return false;
    } else {
        alert(userEmailInput + " thank you for subscribing.");
    }

    // $(".userEmail").text(userEmailInput);

    // $("#response").show();
    event.preventDefault();
  });
});