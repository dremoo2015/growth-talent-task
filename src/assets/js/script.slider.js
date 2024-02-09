(function ($) {
  // Slidder home 4
  console.log("1")

  $('.bxslider-home4').each(function () {
    console.log("2")
    var slider = $(this).bxSlider({
      nextText: '<i class="fa fa-angle-right"></i>',
      prevText: '<i class="fa fa-angle-left"></i>',
      auto: true,
      onSliderLoad: function (currentIndex) {
        $(this)
          .find('li .caption')
          .each(function (i) {
            $(this)
              .show()
              .addClass('animated fadeInRight')
              .one(
                'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function () {
                  $(this).removeClass('fadeInRight animated');
                }
              );
          });
      },
      onSlideBefore: function (slideElement, oldIndex, newIndex) {
        slideElement.find('.caption').each(function () {
          $(this).hide().removeClass('animated fadeInRight');
        });
      },
      onSlideAfter: function (slideElement, oldIndex, newIndex) {
        setTimeout(function () {
          slideElement.find('.caption').each(function () {
            $(this)
              .show()
              .addClass('animated fadeInRight')
              .one(
                'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function () {
                  $(this).removeClass('fadeInRight animated');
                }
              );
          });
        }, 500);
      },
    });
  });
})(jQuery); // End of use strict
