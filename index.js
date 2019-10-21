var work_array = [{
	tit : 'BOBBY_J',
	des : 'Publishig by Nahye (30%)',
	img : '/Portfolio/images/Baby_J/Baby_j.jpg',
	url : '/Portfolio/googims/info/infoPage.html'
},{
	tit : 'GOOGIMS COMPANY',
	des : 'Publishig by Nahye / design by Seoyong',
	img : '/Portfolio/images/googims/googims.jpg',
	url : '/Portfolio/googims/info/infoPage.html'
},{
	tit : 'KUKKA',
	des : 'Shopping Mall/ design & develop',
	img : '/Portfolio/images/kukka/kukka.jpg',
	url : '/Portfolio/kukka/info/infoPage.html'
},{
	tit : 'JARA',
	des : 'web site renewal/ responsive web',
	img : '/Portfolio/images/zara/zara.jpg',
	url : '/Portfolio/zara/info/infoPage.html'
},{
	tit : 'Jeju travel',
	des : 'promotion page / Design & develop',
	img : '/Portfolio/images/promotion/promotion2.jpg',
	url : '/Portfolio/jejuPromotion/info/infoPage.html'
},{
	tit : 'ALZI_GPS alarm app.',
	des : 'App design & prototype/ UI/UX',
	img : '/Portfolio/images/ALZI/alzi.jpg',
	url : '/Portfolio/ALZI/index.html'
},{
	tit : 'NHSung | portfolio',
	des : 'portfolio page / design & develop',
	img : '/Portfolio/images/main/portfolio.jpg',
	url : '/Portfolio/html/info/infoPage.html'
}];

$(document).ready(function(){
	//sec3 타이핑 js
 	  var typed5 = new Typed('#typed5', {
 	    strings: ['원하는 디자인에 맞춰 웹사이트를 제작할 수 있습니다.', '웹표준(HTML5 / CSS3 / jQuery)에 맞춰 퍼블리싱할 수 있습니다.', '반응형 웹사이트를 제작할 수 있습니다.','모바일 웹을 제작할 수 있습니다.','디자인 관련 툴(Ps / Ai)을 사용할 수 있습니다.'],
 	    typeSpeed: 100,
 	    backSpeed: 20,
 	    cursorChar: '_',
 	    shuffle: true,
 	    smartBackspace: false,
 	    loop: true
 	  });
});


//nav 클릭 시, 스크롤 속도 조절
	$("#gnb a").click(function(){
			var target = $(this).attr("href");
			$("html, body").stop().animate({
				scrollTop:$(target).offset().top - $("#content").offset().top
			},300);
		});

//스크롤 시 nav 색상 변경
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll <= 800) {
    	$("#gnb a").removeClass("scrolling");
        $("#gnb a").removeClass("fWhite")
        $("#gnb li:nth-child(1) a").addClass("scrolling");
    } else if (scroll<=1800) {
        $("#gnb a").removeClass("scrolling");
        $("#gnb a").removeClass("fWhite")
        $("#gnb li:nth-child(2) a").addClass("scrolling");
    } else if (scroll<=3740) {
        $("#gnb a").removeClass("scrolling");
        $("#gnb a").removeClass("fWhite")
        $("#gnb li:nth-child(3) a").addClass("scrolling");
    } else {
        $("#gnb a").removeClass("scrolling");
        $("#gnb a").addClass("fWhite");
        $("#gnb li:nth-child(4) a").addClass("scrolling");
    }

});
