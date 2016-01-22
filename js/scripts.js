$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#website").prepend("<li>How are ya!</li>");

    $("ul#user").children("li").first().click(function() {
    $(this).remove();
    });
    $("ul#website").children("li").first().click(function() {
    $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#website").prepend("<li>Take Care!</li>");

    $("ul#user").children("li").first().click(function() {
    $(this).remove();
    });
    $("ul#website").children("li").first().click(function() {
    $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying moi!</li>");
    $("ul#website").prepend("<li>Take a hike!</li>");

    $("ul#user").children("li").first().click(function() {
    $(this).remove();
    });
    $("ul#website").children("li").first().click(function() {
    $(this).remove();
    });

  });




//  fadeIn, fadeOut, fadeToggle slideDown, slideUp, slideToggle,
});
