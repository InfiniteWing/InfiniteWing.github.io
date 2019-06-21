/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function BindTop(IsTop) {
    if (IsTop) {
        $(".IW-nav").removeClass("IW-nav-dark").addClass("IW-nav-light").addClass("IW-nav-light-animate");
    } else {
        $(".IW-nav").removeClass("IW-nav-light-animate").removeClass("IW-nav-light").addClass("IW-nav-dark");
    }
}
$().ready(function () {
    if($( window ).width()<520){
        $(".IW-guider").hide();
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            if(!$(".IW-nav").hasClass("IW-nav-dark")){
                BindTop(false);
            }
        } else {
            if(!$(".IW-nav").hasClass("IW-nav-light")){
                BindTop(true);
            }
        }
    });
});

