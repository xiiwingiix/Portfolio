
//nav 클릭 시, 스크롤 속도 조절 
	$("#gnb a").click(function(){
			var target = $(this).attr("href");
			$("html, body").stop().animate({
				scrollTop:$(target).offset().top - $("#content").offset().top
			},300);
		});

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


//스크롤 시 nav 색상 변경
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll <= 800) {
    	$("#gnb a").removeClass("scrolling");
        $("#gnb li:nth-child(1) a").addClass("scrolling");
    } else if (scroll<=1800) {
        $("#gnb a").removeClass("scrolling");
        $("#gnb li:nth-child(2) a").addClass("scrolling");
    } else if (scroll<=3300) {
        $("#gnb a").removeClass("scrolling");
        $("#gnb li:nth-child(3) a").addClass("scrolling");
    } else {
        $("#gnb a").removeClass("scrolling");
        $("#gnb li:nth-child(4) a").addClass("scrolling");
    }

});