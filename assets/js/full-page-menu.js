$(document).ready(function () {
  return $("#toggle_menu").click(function () {
      return "0px" !== $("#menu").css("margin-left") ? ($("#toggle_menu .cross").show(), $("#toggle_menu .cross").animate({
          right: $("#toggle_menu .cross").css("top")
      }, {
              duration: 1e3
          }), $("#menu").animate({
              marginLeft: 0
          }, {
                  duration: 1e3
              }), $("#fullpage").fadeOut(1e4)) : ($("#toggle_menu .cross").fadeOut(), $("#toggle_menu .cross").animate({
                  right: "-100%"
              }, {
                      duration: 1e3
                  }), $("#menu").animate({
                      marginLeft: "100%"
                  }, {
                          duration: 1e3
                      }), $("#fullpage").stop().show(0))
  }), $(".menu_item").click(function () {
      return $("#toggle_menu .cross").fadeOut(), $("#toggle_menu .cross").animate({
          right: "-100%"
      }, {
              duration: 1e3
          }), $("#menu").animate({
              marginLeft: "100%"
          }, {
                  duration: 1e3
              }), $("#fullpage").stop().show(0)
  })
});