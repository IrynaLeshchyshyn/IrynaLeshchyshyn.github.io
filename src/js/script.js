 $(document).ready(function(){
      //slider in header
        $('.single-item').slick({
        	 dots: true,
            slidesToShow: 1,
            responsive: [{

              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                infinite: true
              }

            }, {

              breakpoint: 990,
              settings: {
                slidesToShow: 1,
                dots: true
              }

            }]
        });

        $(window).on("scroll", function(e) {
            if ($(window).scrollTop() >= 400)
              $(".top-head-container").fadeOut(0);         
            else $(".top-head-container").fadeIn(0);
           
        });

        $(window).scroll(function(){
            if($(this).scrollTop()>400){
                $('.menu-transform').addClass('sticky'),
                $('.transform-search, .logo-tsn--transform').addClass('vis');
            }
            else if ($(this).scrollTop()<780){
                $('.menu-transform').removeClass('sticky'),
                $('.transform-search, .logo-tsn--transform').removeClass('vis');;
            }
        });

        //slider for photo gallery
        $('#lightSlider').lightSlider({
          gallery: true,
          item: 1,
          loop: true,
          slideMargin: 0,
          thumbItem: 9
      });


        $('.share').click( function(event){ 
        $('.share-news-container').show();
    });

       $( '.close-popup').click(function( event ) {
        event.preventDefault();
        $( '.share-news-container' ).hide();
      });
});