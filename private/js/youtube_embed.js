/* 
 YouTube Audio Embed 
 --------------------
 
 Author: Amit Agarwal
 Web:   http://www.labnol.org/?p=26740 
 https://developers.google.com/youtube/iframe_api_reference
 */
var player;
var YouTubeVideoID;
var YouTubeVideoStart;
var AutoPlay;

function onYouTubeIframeAPIReady() {
    YouTubeVideoID = typeof (Cookies.get('YouTubeVideoID')) === 'undefined' ? "HQnC1UHBvWA" : Cookies.get('YouTubeVideoID');
    YouTubeVideoStart = typeof (Cookies.get('YouTubeVideoStart')) === 'undefined' ? 0 : parseInt(Cookies.get('YouTubeVideoStart'));
    YouTubeVideoAutoPlay = typeof (Cookies.get('YouTubeVideoAutoPlay')) === 'undefined' ? 0 : parseInt(Cookies.get('YouTubeVideoAutoPlay'));
    var ctrlq = document.getElementById("youtube-audio");
    player = new YT.Player('youtube-audio', {
        height: '0',
        width: '0',
        videoId: YouTubeVideoID,
        playerVars: {
            loop: 1,
            start: YouTubeVideoStart
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerReady(event) {
    $(window).unload(function () {
        Cookies.set('YouTubeVideoID', YouTubeVideoID);
        Cookies.set('YouTubeVideoStart', player.getCurrentTime());
        if (player.getPlayerState() != 1 && player.getPlayerState() != 3) {
            Cookies.set('YouTubeVideoAutoPlay', 0);
        } else {
            Cookies.set('YouTubeVideoAutoPlay', 1);
        }
    });
    if (YouTubeVideoAutoPlay == 1) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        } else {
            player.playVideo();
            $(".youtube-audio-play-control").removeClass("fa-play").addClass("fa-pause");
        }
    }
    player.setPlaybackQuality("small");
    document.getElementById("youtube-audio").style.display = "none";
    $(".youtube-audio-youtube").click(function () {
        window.open("https://www.youtube.com/watch?v=" + YouTubeVideoID);
    });
    $(".youtube-audio-play-control").click(function () {
        if (player.getPlayerState() != 1 && player.getPlayerState() != 3) {
            $(".youtube-audio-play-control").removeClass("fa-play").addClass("fa-pause");
            player.playVideo();
        }
        else {
            $(".youtube-audio-play-control").removeClass("fa-pause").addClass("fa-play");
            player.pauseVideo();
        }
    });
}

function onPlayerStateChange(event) {
    /*
     * -1 (unstarted)
     0 (ended)
     1 (playing)
     2 (paused)
     3 (buffering)
     5 (video cued).
     */
    switch (event.data) {
        case 1:
            break;
        case 0:
            player.playVideo();
            break;
        case 2:
            break;
        default:
            break;
    }
}