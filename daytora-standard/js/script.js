'use strict';

jQuery('.header-nav li a').click(function() {
  jQuery('.header-nav li a').removeClass( 'is-active' );
  jQuery(this).addClass( 'is-active' );
  return false;
});

jQuery(".drawer-icon").on("click", function (e) {
  e.preventDefault();

  jQuery(".drawer-icon").toggleClass("is-active");
  jQuery(".drawer-content").toggleClass("is-active");
  jQuery(".drawer-background").toggleClass("is-active");
  return false;
});


  // results
  new Swiper( '.swiper-container', {
    speed: 400,
    spaceBetween: 40,
    width: 400,
    loop: true,
    loopedSlides: 6,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      768: {
				spaceBetween: 24,
				width: 274,
      }
    }
  });


    jQuery(".faq-item-question").on("click", function() {
    jQuery(this).next().slideToggle();
    jQuery(this).children('.faq-item-icon').toggleClass('is-open');
    });

    //スムーススクロール
    jQuery(window).on("scroll", function($) {
      if (jQuery(this).scrollTop() > 100) {
        jQuery('.top-scroll').show();
      } else {
        jQuery('.top-scroll').hide();
      }
    });
    
    jQuery('.top-scroll').click(function () {
      jQuery('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });


