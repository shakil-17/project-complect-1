$(document).ready(function(){

//Smooth scrolled-1
      // $( '.navbar ul li a' ).on( 'click', function(e){
      //   var href = $(this).attr( 'href' );
      //   $( 'html, body' ).animate({
      // 		scrollTop: $( href ).offset().top
      //   }, '1000' );
      //
      //   e.preventDefault();
      //
      // });
//Smooth scroll
      $('.navbar ul li a, .navbar .navbar-brand').click(function(e){
        // e.preventDefault(); html none
        var hash = this.hash;
        var position = $(hash).offset().top;
        $('html').animate({
          scrollTop : position
        },1000)

      })


//nav active class

    $('nav ul li a').click(function(){
       $('li a').removeClass("active");
       $(this).addClass("active");
    });

//portfolio active class

    $('.portfolio-filter ul li').click(function(){
      $('ul li').removeClass("active");
      $(this).addClass("active");
    })
//isotope grid or filter
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item'
      }
    });

    $('.portfolio-filter').on( 'click', 'ul li', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

//venobox
    $('.venobox').venobox({
        framewidth : '500px',
        frameheight: '400px',
        border     : '5px',
        bgcolor    : '#4eb478',
        titleattr  : 'data-title',
        numeratio  : true,
        infinigall : true,
    });
//testimonial-carousel

$('.testimonial-carousel').owlCarousel({
  items: 1,
  autoplay: true,
  loop: true
})
//accordinon active
   $('.faq ul li a').click(function(){
     $('li a').removeClass("active");
     $(this).addClass("active");
   });

//secroll-to-top
    $(window).scroll(function(){
      if ($(this).scrollTop()>=250) {
        $("#scroll-to-top").fadeIn(300);
      }
      else{
        $("#scroll-to-top").fadeOut(300);
      }
    });

    $("#scroll-to-top").click(function(){
      $("body,html").animate({
        scrollTop:0
      },1500);
    });

//Portifolio-details
$('.portfoio-details').owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
})

//data-AOS
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
});


//nicescroll
$("body").niceScroll({
  cursorcolor: "#4eb478",
  cursorwidth: "10px",
  cursorborder: "0px",

});


});//jquery-end
