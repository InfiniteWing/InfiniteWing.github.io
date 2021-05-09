$(function () {
	var videos = [
		{videoURL: "1yBc5aDEk5o",containment:'self',autoPlay:false, startAt:0,opacity:1, loop:true, stopMovieOnBlur: false, remember_last_time: true},
		{videoURL:"GXDNMinUPXc",containment:'self',autoPlay:false, startAt:0,opacity:1, loop:true, stopMovieOnBlur: false, remember_last_time: true},
		{videoURL: "FM7MFYoylVs",containment:'self',autoPlay:false, startAt:0,opacity:1, loop:true, stopMovieOnBlur: false, remember_last_time: true}
	];
	$(".yt_player").YTPlaylist(videos, false, function(video){});
	$(".yt_player").on("YTPPlay",function(e){
		$(".youtube-audio-play-control").removeClass("fa-play").addClass("fa-pause");
	});	
	$(".yt_player").on("YTPPause",function(e){
		$(".youtube-audio-play-control").removeClass("fa-pause").addClass("fa-play");
	});	
	$(".youtube-audio-play-control").click(function () {
        if ($(".youtube-audio-play-control").hasClass("fa-play")) {
            $(".yt_player").YTPPlay();
        }
        else {
            
            $(".yt_player").YTPPause();
        }
    });
	$(".youtube-audio-forward").click(function () {
		$(".yt_player").YTPPlayNext();
		return false;
	});
	$(".youtube-audio-forward").click(function () {
		$(".yt_player").YTPPlayPrev();
		return false;
	});
})(jQuery);


