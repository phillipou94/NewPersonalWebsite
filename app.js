
$(document).ready(function(){

   // jQuery methods go here...

   	var offset = 300,
	//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
	offset_opacity = 1200,
	//duration of the top scrolling animation (in ms)
	scroll_top_duration = 700;

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

});

