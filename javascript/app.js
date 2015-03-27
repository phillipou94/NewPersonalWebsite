
$(document).ready(function(){

   // jQuery methods go here...

   $('.scroll-to-skills').click(function(){
        var nextSection = $('.section-header');
        $('html, body').animate({
            scrollTop: $(nextSection).offset().top
        }, 2000);
    });

   $('.scroll-to-portfolio').click(function(){
        var nextSection = $('.portfolio');
        $('html, body').animate({
            scrollTop: $(nextSection).offset().top
        }, 2000);
    });

    $(".project-link").hover(function(){
        $(".project").css("border", "1px solid rgba(235,235,235,1)");
        $(".project-logo").css("border-style","none");
        },function(){
        $(".project").css("border-style", "none");
        $(".project-logo").css("border", "2px solid rgba(245,245,245,1)");
    });

});

