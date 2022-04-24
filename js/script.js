$(document).scroll(function() {
    var scroll = $(document).scrollTop();
  
    if (scroll >= 300) {
      $(".menu").addClass("transparent");
    } else {
      $(".menu").removeClass("transparent");
    }


    $("a[href='#top']").click(function() {
        // $("html, body").animate({ scrollTop: 0 }, "fast");
        // return false;
        
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
          });
    });
});