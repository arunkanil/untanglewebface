$(window).scroll(function(){
  var sticky = $('.main-header'),
      scroll = $(window).scrollTop();

  if (scroll >= 30) sticky.addClass('main-header-bg');
  else sticky.removeClass('main-header-bg');
});

$(document).ready(function() {
	
  $(".blog-line-content a, .site-menu li a, .a-team a, .web-all a, .web-mob a, .s-home a, .contactRight li a").on("click touchend", function(e) {
    var el = $(this);
    var link = el.attr("href");
    window.location = link;
  });
  
});
