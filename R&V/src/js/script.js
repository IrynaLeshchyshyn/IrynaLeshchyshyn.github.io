$(document).ready(function(){
  
	 $('.multiple-items').slick({
	      infinite: true,
	      slidesToShow: 3,
	   	slidesToScroll: 1,
	      autoplay:true,
	      autoplaySpeeed:200,
	      arrows:false,
	      responsive: [
			    {
			      breakpoint: 1130,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1,
			        infinite: true        
			      }
			    },
			    {
			      breakpoint: 970,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 750,
			      settings: {
			      	centerMode: true,
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },{
			      breakpoint: 650,
			      settings: {
			      	centerMode: true,
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }

			  ]
	    });


 	$( ".servise__card" )
		  .mouseenter(function() {   
		    $( this ).find( '.servise__hover' ).addClass('shift');
	  	})
		  .mouseleave(function() {
		    $( this ).find( '.servise__hover' ).removeClass('shift');
  	});

/*$( '.menu__cell' ).click(function() {
	 event.preventDefault();
		$(this).find('.menu__submenu').toggleClass("shows");
		 $('.menu__cell').removeClass('back');
		
		if ($(this).hasClass("back")) {
		    $(this).removeClass('back');
		}
		else{	
			$(this).addClass("back");

		}
	});
	*/

	$('.button-watch-video').click(function(event){ 
     	 event.preventDefault();
		$('.popup-video').addClass('active');
  	});

	 $('.button-close-video-popup').click(function(event){ 
     	 event.preventDefault();
     	 $('.popup-video').removeClass('active');
  	});

	$(function () {      
        var $cont = $(".twitter-container"),
        prd = setInterval(function () {
            if ($cont.find("> iframe").contents().find(".twitter-timeline").length > 0) {                
                clearInterval(prd)
            }
        }, 100);
    });

  	//navigation scroll
	/*$(".menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 100}, 400);
	});

*/

	//navigation sticky
	/*$(window).scroll(function(){
            if($(this).scrollTop()>280){
                $('.fixed-menu').addClass('sticky');
            }
            else if ($(this).scrollTop()<280){
                $('.fixed-menu').removeClass('sticky');
            }
        });*/

/*gamburger button*/
          $(".click-btn").click( function() {
             $(this).toggleClass("active");
          });


          /*menu scroll*/
          function toggleMenu() {
              var $menu = $(".menu");
              var $trigger = $(".click-btn");
              
              $trigger.on("click", function() {
                  if($menu.css("display") == "none") {
                      $(this).addClass("active");
                      $menu.slideDown("slow");
                  } else {
                      $(this).removeClass("active");
                      $menu.slideUp("slow");
                  }
              });

              $(window).resize(function() {
                  if ( $(window).outerWidth() > 990 ) {
                      $menu.removeAttr('style');
                      $trigger.removeClass("active");
                  }
              });

              $menu.find(".menu li a").add(".menu li a, .scroll-to-top").on("click", function() {
                  if ( $(window).outerWidth() <= 990 ) {
                      $trigger.removeClass("active");
                      $menu.slideUp("fast");
                  }
              });
          }
          toggleMenu();   



           $('[data-scroll]').click(function () {
          var target = $(this).data('scroll');
            $('html, body').animate({scrollTop: $(target).offset().top}, 750);
            if($(this).closest('.menu-header').length){
              $('.menu-header a').removeClass('active');
              $(this).addClass('active');
            }
            return false;
      });

});
