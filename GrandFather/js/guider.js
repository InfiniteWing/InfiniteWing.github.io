var lastGuiderAction = 0;
var stayTime = 0;
$(function () {
    $.preload('/image/03.png');
    $(".IW-guider .msg-box span").typed({
        strings: ["新年快樂！一年的新開始要加油囉！"],
        //strings: ["冬天到了，記得多穿件衣服，注意保暖喔！"],
        //strings: ["春暖花開的季節，一年的新開始要加油囉！"],
        typeSpeed: 100
    });
    setInterval(ReloadStrings, 30000);
});
function ReloadStrings() {
    stayTime += 20;
    var rand = Random(10000);
    while (rand % 2500 == lastGuiderAction) {
        rand = Random(10000);
    }
    lastGuiderAction = rand % 2500;
    if (rand < 2500) {
        if (stayTime > 60 * 10) {
            $(".IW-guider .msg-box span").typed({
                strings: ["能原諒別人的人最快樂。當你原諒一個人的時候，當下心裡面的煩苦也同時消失了。"],
                typeSpeed: 100
            });
        } else {
            $(".IW-guider .msg-box span").typed({
                strings: ["遇到困難，一定要用更大的鬥志面對，惟有勇敢迎敵，才有機會致勝。"],
                typeSpeed: 100
            });
        }
    } else if (rand < 5000) {
        $(".IW-guider .msg-box span").typed({
            strings: ["冬天到了，記得多穿件衣服，注意保暖喔！"],
            typeSpeed: 100
        });
    } else if (rand < 7500) {
        $(".IW-guider .msg-box span").typed({
            strings: ["能惜福的人，就能行善，能行善的人，必能時時快樂，這就是幸福的人生。"],
            typeSpeed: 100
        });
    } else {
        
        //if (navigator.geolocation) {
        //    navigator.geolocation.getCurrentPosition(ShowWeather);
        //} else {
            $(".IW-guider .msg-box span").typed({
                strings: ["歡喜和感恩是消除煩惱的力量。"],
                typeSpeed: 100
            });
        //}
    }
}
function ShowWeather(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    $(".IW-guider .msg-box span").typed({
        strings: ["你的經緯度座標為：^500(" + lat.toFixed(3) + "," + lon.toFixed(3) + ")，^800很抱歉目前還沒有聰明到能提供即時氣象資訊。"],
        typeSpeed: 100
    });
}
function Random(size) {
    return Math.floor(Math.random() * (size) + 1);
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