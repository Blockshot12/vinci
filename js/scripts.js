(function($) {
  "use strict"; // Start of use strict
/*
  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 100
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });*/

  // Offset for Main Navigation
  /*$('#mainNav').affix({
    offset: {
      top: 1
    }
  });

  $('#header').affix({
    offset: {
      top: 1
    }
  });

  $('.flipbox').hover(function(){
    $(this).addClass('flip');
	},function(){
		$(this).removeClass('flip');
	});

  $('#testimonials').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
  });

//  $('.grid').isotope({
//    itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
//    percentPosition: true,
//    masonry: { columnWidth: '.grid-sizer' }
//  });



})(jQuery); // End of use strict

$( document ).ready(function() {
  /* activate jquery isotope 
  var $container = $('#posts').isotope({
    itemSelector : '.menneske-thumbnail',
    isFitWidth: true
  });

//  $(window).smartresize(function(){
//    $container.isotope({
//      columnWidth: '.col-sm-3'
//    });
//  });

  $container.isotope({ filter: '*' });

    // filter items on button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('#filters').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-active').removeClass('is-active');
      $( this ).addClass('is-active');
    });
  });
});
