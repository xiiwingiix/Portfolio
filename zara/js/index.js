
//헤더
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll <= 1000) {
    	$("header").css("background", "rgba(255,255,255,0)");
    	$("header>ul>li>a").css("color", "#fff");
    	$("header>a.logo>img:first-child").css("display", "block");
    	$("header>a.logo>img:last-child").css("display", "none");
    	$("header>a.bag>img:nth-child(1)").css("display", "block");
    	$("header>a.bag>img:nth-child(2)").css("display", "none");
    } else if (scroll <=2670) {
    	$("header").css("background","rgba(255,255,255,1)");
    	$("header>ul>li>a").css("color", "#000");
    	$("header>a.logo>img:first-child").css("display", "none");
    	$("header>a.logo>img:last-child").css("display", "block");
    	    	$("header>a.bag>img:nth-child(1)").css("display", "none");
    	$("header>a.bag>img:nth-child(2)").css("display", "block");
    }else if (scroll <=3700) {
    	$("header").css("background", "rgba(255,255,255,0)");
    	$("header>ul>li>a").css("color", "#fff");
    	$("header>a.logo>img:first-child").css("display", "block");
    	$("header>a.logo>img:last-child").css("display", "none");
    	$("header>a.bag>img:nth-child(1)").css("display", "block");
    	$("header>a.bag>img:nth-child(2)").css("display", "none");
    }else {
    	$("header").css("background","rgba(255,255,255,1)");
    	$("header>ul>li>a").css("color", "#000");
    	$("header>a.logo>img:first-child").css("display", "none");
    	$("header>a.logo>img:last-child").css("display", "block");
    	    	$("header>a.bag>img:nth-child(1)").css("display", "none");
    	$("header>a.bag>img:nth-child(2)").css("display", "block");
    }

});

//섹션1 - 배경 
setInterval(function(){
	$('.sec1>ul.main1>li').first().appendTo('.sec1>ul.main1');
},3000);
setInterval(function(){
	$('.sec1>ul.main2>li').first().appendTo('.sec1>ul.main2');
},3000);
//섹션3 - 마퀴툴 
$('.marquee').marquee({
    duration: 20000,
   	gap: 0,
  	delayBeforeStart: 0,
    direction: 'left',
    duplicated: true
});