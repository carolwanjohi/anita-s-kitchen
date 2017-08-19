// Back-end

// Front-end
$(document).ready(function() {
    //  Open and close hamburger menu
    $('.menu-toggle').on('click', function(){
      $('.hamburgerMenu').toggleClass('hamburgerMenu--open');
    })

    // Change opacity on hover
    $("#breakfast").hover( function(){
        $(this).stop().animate({ opacity: 0.75 }, "fast").css("color", "black"); // hover
    },
    function() {
        $(this).stop().animate({ opacity: 1.0 }, "fast").css("color", "white"); // mouse out
    });

    $("#lunch").hover( function(){
        $(this).stop().animate({ opacity: 0.75 }, "fast").css("color", "black"); // hover
    },
    function() {
        $(this).stop().animate({ opacity: 1.0 }, "fast").css("color", "white"); // mouse out
    });

    $("#dinner").hover( function(){
        $(this).stop().animate({ opacity: 0.75 }, "fast").css("color", "black"); // hover
    },
    function() {
        $(this).stop().animate({ opacity: 1.0 }, "fast").css("color", "white"); // mouse out
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

    event.preventDefault();
  });
});