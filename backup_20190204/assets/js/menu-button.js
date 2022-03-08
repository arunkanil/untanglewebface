/*

$('.menu-icon').click(function() {
   $(this).toggleClass('menu-icon-clicked');
   $('.site-nav').toggleClass('site-nav-open');
  });



$('.menu-filters').click(function() {
   $(this).toggleClass('menu-filters-clicked');
   $('.filters').toggleClass('filters-closed');
  });


$('.map-bg').click(function() {
   $(this).toggleClass('map-bg-open');
  });

*/

  $('.menu-icon').click(function() {
      $('.site-nav').toggleClass('site-nav-open');
      $('.menu-icon').toggleClass('menu-icon-clicked');
  });

  $(document).click(function(event){
      let tag = event.target.className;
      if (tag!='menu-icon'  && tag!='menu-icon menu-icon-clicked' && tag!='menu-bar mb-middle'  && tag!='menu-bar mb-bottom' && tag!='menu-bar mb-top') {
          $('.site-nav').removeClass('site-nav-open');
          $('.menu-icon').removeClass('menu-icon-clicked')
      }
  });

    $(document).bind( "touchstart", function(event){
    let tag = event.target.className;
    if (tag!='menu-icon'  && tag!='menu-icon menu-icon-clicked' && tag!='menu-bar mb-middle'  && tag!='menu-bar mb-bottom' && tag!='menu-bar mb-top') {
        $('.site-nav').removeClass('site-nav-open');
        $('.menu-icon').removeClass('menu-icon-clicked')
    }
  });
