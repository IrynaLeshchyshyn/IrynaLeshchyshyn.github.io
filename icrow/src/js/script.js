$(document).ready(function(){
  //slick slider
    $('.your-class').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false, 
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


  //nav in header
  $('.nav').nav({ 
      navButton: '.nav-button',
      subMenu: '.nav-submenu',  
      mouseOver: true,
      disableSubMenuLink: 'always', 
      slideSpeed: 500
  });



    //navigation scroll
  $(".nav").on("click","a", function (event) {
   
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 100}, 300);
  });

  //sticky header
  $(window).scroll(function(){
      if($(this).scrollTop()>300){
          $('.sticky-header').addClass('sticky');
      }
      else if ($(this).scrollTop()<300){
          $('.sticky-header').removeClass('sticky');
      }
  });
 
 //plagin for scroll and animation
  new WOW().init();

}); 