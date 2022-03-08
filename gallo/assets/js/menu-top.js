$(window).scroll(function(){
  var sticky = $('.main-header'),
      scroll = $(window).scrollTop();

  if (scroll >= 130) sticky.addClass('main-header-bg');
  else sticky.removeClass('main-header-bg');
});

