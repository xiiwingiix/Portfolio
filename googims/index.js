//sec1 [scroll - video size]
$(window).on("scroll", function() {
    var s = 1400 - Math.min(600, $(document).scrollTop());
    $("video").width(s);
});

//sec2, sec4, sec6  [scroll - img transform]
$(window).on("scroll", function() {
	var scroll = $(window).scrollTop();
	var sec2s = -100 + $(window).scrollTop()/3;
	var sec3s = -250 + $(window).scrollTop()/3.5;
	var sec3s2 = -150 + $(window).scrollTop()/3.5;
	var sec4s = -400 + $(window).scrollTop()/4;
	var sec5s1 = 15183 - $(window).scrollTop()*3;
	var sec5s2 = -5097 + $(window).scrollTop()*1;
	var sec7s = 2300-$(window).scrollTop()/5;



	if (scroll>=500 && scroll<1800) {//sec2 img, textBox
		$('.sec2>.imgBox>img').animate({"top" : "0px", "left": "0px"},700);
		$(".textBx").css("top", sec2s);
	} else if (scroll>=1800 && scroll<3184){//sec3 text
		$(".sec3Wrap").css("top", sec3s);
		$(".redLine").css("top", sec3s2)
					 .animate({"width":"140px"}, 1300);
	} else if (scroll>=3184 && scroll<5056) {//sec4 img, textBox
		$('.sec4 .imgBox>img').animate({"top" : "0px", "left": "0px"},700);
		$(".sec4p").css("top", sec4s);
	} else if (scroll>=5056 && scroll<7075){//sec5 member
		$('.sec5FigG').css({"transform": 'translate('+ sec5s1+'px,'+sec5s2+'px)'});
	}else if (scroll>=7075 && scroll<7801) {//sec6 img, logo
		$('.product1>img').animate({"top" : "0px", "left": "0px"},500);
		$('.product2>img').animate({"top" : "0px", "left": "0px"},500);
	} else if (scroll>=7801 && scroll<8529) {		
		$('.product3>img').animate({"top" : "0px", "left": "0px"},500);
		$('.product4>img').animate({"top" : "0px", "left": "0px"},500);
	} else if (scroll>=8529 && scroll<8615) {		
		$('.product5>img').animate({"top" : "0px", "left": "0px"},500);
		$('.product6>img').animate({"top" : "0px", "left": "0px"},500);
	} else if(scroll>=8615&& scroll <11120 ){
		$(".balloon").css("top", sec7s);
	} else{
	}
});
//sec6 [scroll - logo rotate]
$(window).on("scroll", function() {
	var sec6s = $(window).scrollTop()/7 + 90;
	$('.sec6Logo>img').css({"transform" : "rotate("+sec6s+'deg)'});
});

$(window).on("scroll", function() {
	var scrollBottom = $(window).scrollTop() + $(window).height();
	if (scrollBottom>=11509&& scrollBottom<=11802) {
		$('.sec8Nav1>a>span').animate({'opacity': '1'},500);
		$('.sec8Nav2>a>span').animate({'opacity': '1'},1000);
		$('.sec8Nav3>a>span').animate({'opacity': '1'},1500);
		$('.sec8Nav4>a>span').animate({'opacity': '1'},2000);
		$('.sec8Nav5>a>span').animate({'opacity': '1'},2500);
		$('.sec8Nav6>a>span').animate({'opacity': '1'},3000);
	}else {
	}
});

//sec7 [Marquee tool] 
$('.store').marquee({
    duration: 10000,
   	gap: 0,
  	delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
	pauseOnHover: true
});