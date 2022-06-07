(function ($) {
    "use strict";
     //Navbar on scrolling

     $(window).scroll(function (){
         if($(this).scrollTop() > 200) {
             $('.navbar').fadeIn('slow').css('display','flex');
         }else{
             $('.navbar').fadeOut('slow').css('display','none');
         }
     });
    //typed initiate
    if ($('.typed-text-output').length == 1){
        var typed_strings= $('.typed-text').text();
        var typed = new Typed('.typed-text-output',{
            strings:typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });

        // Testimonials Carousel
        $('.testimonial-carousel').owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            dots: true,
            loop: true,
            items: 1,
        });

        // Back to top button
          $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


        
    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


        // Portfolio isotope and filter

        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item', 
            layoutMode: 'fitRows'
        });
        $('#portfolio-filters li').on('click',function(){
            $("#portfolio-filters li").removeClass('active');
            $(this).addClass('active');

            portfolioIsotope.isotope({filter: $(this).data('filter')});

        });

        //skill bar

        $('.skill').waypoint(function (){
            $('.progress .progress-bar').each(function (){
                $(this).css("width", $(this).attr("aria-valuenow") + '%');
            });
        },{offset: '80%'});

        
        
    }
})(jQuery);

