jQuery(document).ready(function($){
    $('body').css('visibility','');
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$guider_up = $('.guider-up'),
                $guider_down = $('.guider-down');
        /*
         //hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $guider_up.parent().stop(false, false).fadeIn() : $guider_up.parent().stop(false, false).fadeOut();
	});
        */
	//smooth scroll up or down
	$guider_up.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
        $guider_down.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: $(document).height(),
		 	}, scroll_top_duration
		);
	});

});