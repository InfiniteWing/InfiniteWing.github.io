var lastGuiderAction = 0;
var GuiderSkin = 0;
var stayTime = 0;
var typedLocked = false;
var powerOffLocked = false;
var GuiderPowerOff;
var GuiderYouTubeOff;
$(function () {
    GuiderSkin = typeof (Cookies.get('GuiderSkin')) === 'undefined' ? 0 : parseInt(Cookies.get('GuiderSkin'));
    GuiderPowerOff = typeof (Cookies.get('GuiderPowerOff')) === 'undefined' ? false : parseBoolean(Cookies.get('GuiderPowerOff'));
    GuiderYouTubeOff = typeof (Cookies.get('GuiderYouTubeOff')) === 'undefined' ? false : parseBoolean(Cookies.get('GuiderYouTubeOff'));
    switch (GuiderSkin) {
        case 0:
            $(".guider-img-public").show();
            break;
        case 1:
            $(".guider-img-base").show();
            break;
    }
    if (GuiderYouTubeOff) {
        $(".IW-guider>.audio-box").stop(false, false).hide();
    }
    if (GuiderPowerOff) {
        $(".IW-guider").animate({"left": "-350px"}, 0);
    }
    /*
    $(".guider-img-public").dblclick(function () {
        $(".guider-img-public").hide();
        $(".guider-img-base").show();
        GuiderSkin = 1;
    });
    */
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
                    strings: ["主人^600.^600.^600.^600<br />歐呀絲咪"],
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
                    strings: ["^1100主人，歡迎回來(´・ω・`)^1000<br />很高興再次見到你！"],
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
    //$.preload('/IDC/images/guider/guider04.png', '/IDC/images/guider/guider06.png', '/IDC/images/guider/guider02.png', '/IDC/images/guider/guider18.png');
    $(".IW-guider .msg-box span").typed({
        strings: ["主人，歡迎回來！！"],
        typeSpeed: 100
    });
    //setInterval(ChangeImage, 4500);
    setInterval(ReloadStrings, 20000);
    $(window).unload(function () {
        Cookies.set('GuiderPowerOff', GuiderPowerOff);
        Cookies.set('GuiderYouTubeOff', GuiderYouTubeOff);
        Cookies.set('GuiderSkin', GuiderSkin);
    });
});

function ReloadStrings() {
    if (typedLocked) {
        return;
    }
    stayTime += 20;
    var rand = Random(10000);
    while (rand % 2500 == lastGuiderAction) {
        rand = Random(10000);
    }
    lastGuiderAction = rand % 2500;
    if (rand < 2500) {
        if (stayTime > 60 * 5 && stayTime < 60 * 10) {
            $(".IW-guider .msg-box span").typed({
                strings: ["沒想到主人是一個...^1000這麼專情的人！"],
                typeSpeed: 100
            });
        } else if (stayTime > 60 * 10) {
            $(".IW-guider .msg-box span").typed({
                strings: ["好睏唷..."],
                typeSpeed: 100
            });
        } else {
            $(".IW-guider .msg-box span").typed({
                strings: ["主人...^1000最喜歡！！"],
                typeSpeed: 100
            });
        }
    } else if (rand < 5000) {
        $(".IW-guider .msg-box span").typed({
            strings: ["嗚喵～^1000嗚喵～^1000嗚喵～"],
            typeSpeed: 100
        });
    } else if (rand < 7500) {
        $(".IW-guider .msg-box span").typed({
            strings: ["主人^400.^400.^400.^400你要左邊還是右邊呢？"],
            typeSpeed: 100
        });
    } else {
        /*
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(ShowWeather);
        } else {
            $(".IW-guider .msg-box span").typed({
                strings: ["對於經緯度了利用，我們只是想做即時氣象的提醒(雖然還沒做出來Orz)。"],
                typeSpeed: 100
            });
        }
        */
    }
}
function ShowWeather(position) {
    /*
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    $(".IW-guider .msg-box span").typed({
        strings: ["你的經緯度座標為：^500(" + lat.toFixed(3) + "," + lon.toFixed(3) + ")，^800很抱歉目前還沒有聰明到能提供即時氣象資訊。"],
        typeSpeed: 100
    });
    */
}
function ChangeImage() {
    /*
    var rand = Random(15000);
    if (rand < 5000) {
        $(".IW-guider .guider-img").css("background-image", "url('/IDC/images/guider/guider18.png')").delay(200).queue(function (next) {
            $(this).css("background-image", "url('/IDC/images/guider/guider04.png')");
            next();
        });
    } else if (rand < 10000) {
        $(".IW-guider .guider-img").css("background-image", "url('/IDC/images/guider/guider02.png')").delay(200).queue(function (next) {
            $(this).css("background-image", "url('/IDC/images/guider/guider04.png')");
            next();
        });
    } else {
        $(".IW-guider .guider-img").css("background-image", "url('/IDC/images/guider/guider06.png')").delay(200).queue(function (next) {
            $(this).css("background-image", "url('/IDC/images/guider/guider04.png')");
            next();
        });
    }
    */
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