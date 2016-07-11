$(document).ready(function() {
   
   /* for sticky navigation */
    
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
        
    }, {
  offset: '60px;'
});
    
        
    $('.js--our-teams').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
        
    }, {
  offset: '60px;'
});

    /* scroll on buttons */
    $('.js--scroll-to-form').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 1000);
    });

    
    /* scroll navi */
    $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
    

    
    
    /*animations on scroll*/
   
    //if($(window).width() > 480) {//
    $('.js--wp-1').waypoint(function(direction) {
       $('.js--wp-1').addClass('animated fadeIn'); 
    
    }, {
        offset: '50%'
    });
    
      $('.js--wp-2').waypoint(function(direction) {
       $('.js--wp-2').addClass('animated fadeInUp'); 
    
    }, {
        offset: '50%'
    });
      
        $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-3').addClass('animated fadeIn'); 
    
    }, {
        offset: '50%'
    });
        
          $('.js--wp-4').waypoint(function(direction) {
       $('.js--wp-4').addClass('animated pulse'); 
    
    }, {
        offset: '50%'
    });
    //}//
    
    /*animations on scroll team*/
              $('.js--wp-5').waypoint(function(direction) {
       $('.js--wp-5').addClass('animated bounceInLeft'); 
    
    }, {
        offset: '50%'
    });
    
              $('.js--wp-6').waypoint(function(direction) {
       $('.js--wp-6').addClass('animated bounceInLeft'); 
    
    }, {
        offset: '50%'
    });
    
              $('.js--wp-7').waypoint(function(direction) {
       $('.js--wp-7').addClass('animated fadeInUp'); 
    
    }, {
        offset: '50%'
    });

                $('.js--wp-8').waypoint(function(direction) {
       $('.js--wp-8').addClass('animated bounceInLeft'); 
    
    }, {
        offset: '50%'
    });
    
              $('.js--wp-9').waypoint(function(direction) {
       $('.js--wp-9').addClass('animated fadeInUp'); 
    
    }, {
        offset: '50%'
    });
    
                    $('.js--wp-10').waypoint(function(direction) {
       $('.js--wp-10').addClass('animated bounceInLeft'); 
    
    }, {
        offset: '50%'
    });
    
              $('.js--wp-11').waypoint(function(direction) {
       $('.js--wp-11').addClass('animated fadeInUp'); 
    
    }, {
        offset: '50%'
    });
    
                        $('.js--wp-12').waypoint(function(direction) {
       $('.js--wp-12').addClass('animated bounceInLeft'); 
    
    }, {
        offset: '50%'
    });
    
              $('.js--wp-13').waypoint(function(direction) {
       $('.js--wp-13').addClass('animated fadeInUp'); 
    
    }, {
        offset: '50%'
    });
    
                        $('.js--wp-14').waypoint(function(direction) {
       $('.js--wp-14').addClass('animated bounceInLeft'); 
    
    }, {
        offset: '50%'
    });
    
              $('.js--wp-15').waypoint(function(direction) {
       $('.js--wp-15').addClass('animated fadeInUp'); 
    
    }, {
        offset: '50%'
    });
    /*mobile navigation*/
    $('.js--nav-icon').click(function() {
       var nav = $('.js--main-nav');
       var icon = $('.js--nav-icon i') 
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round')
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round') 
        }
    });
    
    /*maps*/

    
});


/*Magnific Pop up*/







     