$(document).ready(function (e) {
  // var item_num = $('#selector ul li').length + 1;
  // var btn_state = true;

  // $('#selector ul li').hover(function () {
  //   $(this).addClass('active');
  // }, function () {
  //   $(this).removeClass('active');
  // });

  // $('#selector ul li').index(0).addClass('active');
  // $('.description').index(0).addClass('active');

  $('#selector ul li').on('click', function (e) {
    var isDisabled = ['disabled', 'arrow_right'].includes(e.target.className);
    
    if (!isDisabled) {
      var i = $('#selector ul li').index(this);
      
      $('#selector ul li').removeClass('active');
      $(this).addClass('active');
      $('.description').removeClass('active');
      $('.description').css('display', 'none').addClass('description');
      $('.description').eq(i).fadeIn().addClass('active');
    }
  });
});