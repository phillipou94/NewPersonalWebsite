
$(document).ready(function(){

   // jQuery methods go here...

   $('.scroll-to-skills').click(function(){
        var nextSection = $('.section-header');
        $('html, body').animate({
            scrollTop: $(nextSection).offset().top
        }, 2000);
    });

});

