var lastGuiderAction = 0;
var GuiderSkin = 0;
var stayTime = 0;
var typedLocked = false;
var powerOffLocked = false;
var GuiderPowerOff;
var GuiderYouTubeOff;
var GuiderShow;
$(function () {
    GuiderSkin = typeof (Cookies.get('GuiderSkin')) === 'undefined' ? 0 : parseInt(Cookies.get('GuiderSkin'));
    GuiderPowerOff = typeof (Cookies.get('GuiderPowerOff')) === 'undefined' ? false : parseBoolean(Cookies.get('GuiderPowerOff'));
    GuiderYouTubeOff = typeof (Cookies.get('GuiderYouTubeOff')) === 'undefined' ? false : parseBoolean(Cookies.get('GuiderYouTubeOff'));
    
    GuiderShow = typeof (Cookies.get('GuiderShow')) === 'undefined' ? false : parseBoolean(Cookies.get('GuiderShow'));
    switch (GuiderSkin) {
        case 0:
            $(".guider-img-public").show();
            break;
        case 1:
            $(".guider-img-base").show();
            break;
    }
    if(GuiderShow){
        $('.IW-guider').show();
    }else{
        $('.IW-guider').hide();
    }
    $('.widget-profile').dblclick(function() {
        if($('.IW-guider').css('display') == 'none' || $('.IW-guider').css("visibility") == "hidden"){
            GuiderShow = true;
            $('.IW-guider').css("bottom","-445px").show();
            $('.IW-guider').stop(false, false).animate({"bottom":"+=430px"},1000);
            $(".IW-guider .msg-box span").typed({
                strings: ["^100總覺得我一直在尋覓著什麼..."],
                typeSpeed: 100
            });
        }
        else{
            GuiderShow = false;
            $('.IW-guider').stop(false, false).animate({"bottom":"-=430px"},1000,function(){
                $(this).hide();
            });
        }
    });
    
    
    if (GuiderYouTubeOff) {
        $(".IW-guider>.audio-box").stop(false, false).hide();
    }
    if (GuiderPowerOff) {
        $(".IW-guider").animate({"left": "-350px"}, 0);
    }

    $(".guider-img-base").dblclick(function () {
        $(".guider-img-base").hide();
        $(".guider-img-public").show();
        GuiderSkin = 0;
    });
    $(".guider-copyright").click(function () {
        if (!typedLocked) {
            typedLocked = true;
            $(".IW-guider .msg-box span").typed({
                strings: ["本插件由<strong><a href='mailto:sars6608@gmail.com'>InfiniteWing</a></strong>製作，^800開工時間為2016-11-04。^800"],
                typeSpeed: 100
            });
            setTimeout(function () {
                typedLocked = false;
            }, 30000);
        }
    });
    $(".guider-power").click(function () {
        if (!powerOffLocked) {
            if (!GuiderPowerOff) {
                typedLocked = true;
                powerOffLocked = true;
                $(".IW-guider .msg-box span").typed({
                    strings: ["Shutdown.."],
                    typeSpeed: 60
                });
                setTimeout(function () {
                    typedLocked = false;
                    GuiderPowerOff = true;
                    powerOffLocked = false;
                    $(".IW-guider").stop(false, false).animate({"left": "-350px"}, 1000);
                }, 7500);
            } else {
                typedLocked = true;
                powerOffLocked = true;
                GuiderPowerOff = false;
                $(".IW-guider").stop(false, false).animate({"left": "10px"}, 1000);
                $(".IW-guider .msg-box span").typed({
                    strings: ["^100總覺得我一直在尋覓著什麼..."],
                    typeSpeed: 100
                });
                setTimeout(function () {
                    typedLocked = false;
                    powerOffLocked = false;
                }, 6000);
            }
        }
    });
    $(".guider-music").click(function () {
        if (!GuiderYouTubeOff) {
            GuiderYouTubeOff = true;
            $(".IW-guider>.audio-box").stop(false, false).fadeOut(600);
        } else {
            GuiderYouTubeOff = false;
            $(".IW-guider>.audio-box").stop(false, false).fadeIn(600);
        }
    });
    $(".IW-guider .msg-box span").typed({
        strings: ["^100總覺得我一直在尋覓著什麼..."],
        typeSpeed: 100
    });
    setInterval(ReloadStrings, 20000);
    $(window).unload(function () {
        Cookies.set('GuiderPowerOff', GuiderPowerOff);
        Cookies.set('GuiderYouTubeOff', GuiderYouTubeOff);
        Cookies.set('GuiderSkin', GuiderSkin);
        Cookies.set('GuiderShow', GuiderShow);
    });
});

function ReloadStrings() {
    if (typedLocked) {
        return;
    }
    stayTime += 20;
    var rand = Random(10000);
    while (rand == lastGuiderAction) {
        rand = Random(10000);
    }
    lastGuiderAction = rand;
    if (rand < 5000) {
        $(".IW-guider .msg-box span").typed({
			strings: ["^100總覺得我一直在尋覓著什麼..."],
			typeSpeed: 100
		});
    } else {
        $(".IW-guider .msg-box span").typed({
			strings: ["^100Where Do We Come From?<br />^1000What Are We?<br />^1000Where Are We Going?"],
			typeSpeed: 100
		});
    }
}

function Random(size) {
    return Math.floor(Math.random() * (size) + 1);
}
function parseBoolean(str) {
    return /true/i.test(str);
}
(function ($) {
    $.preload = function () {
        var imgs = Object.prototype.toString.call(arguments[ 0 ]) === '[object Array]'
                ? arguments[ 0 ] : arguments;

        var tmp = [];
        var i = imgs.length;

        // reverse loop run faster
        for (; i--; )
            tmp.push($('<img />').attr('src', imgs[ i ]));
    };
})(jQuery);


