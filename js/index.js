var work_array = [{
	tit : 'Canvas',
	des : 'Publishig by Nahye (100%)',
	img : '/images/card_game/card_thumnail.jpg',
	alt : '[practice]canvas',
	url : '/html/canvas.html'
},{
	tit : 'CARD_GAME',
	des : 'Publishig & develop by Nahye (100%)',
	img : '/images/card_game/card_thumnail.jpg',
	alt : '[practice]card_game',
	url : '/html/card_game.html'
},{
	tit : 'BOBBY_J',
	des : 'Publishig by Nahye (30%)',
	img : '/images/Bobby_J/Baby_j.jpg',
	alt : 'Baby_J young women cloth shopping mall',
	url : '/googims/info/infoPage.html'
},{
	tit : 'GOOGIMS COMPANY',
	des : 'Publishig by Nahye / design by Seoyong',
	img : '/images/googims/googims.jpg',
	alt : 'googims young casual cloth shopping mall',
	url : '/googims/info/infoPage.html'
},{
	tit : 'KUKKA',
	des : 'Shopping Mall/ design & develop',
	img : '/images/kukka/kukka.jpg',
	alt : 'kukka flower shopping mall',
	url : '/html/kukka_intro.html'
},{
	tit : 'JARA',
	des : 'web site renewal/ responsive web',
	img : '/images/zara/zara.jpg',
	alt : 'jara Web Site',
	url : '/html/zara_intro.html'
},{
	tit : 'Jeju travel',
	des : 'promotion page / Design & develop',
	img : '/images/promotion/promotion2.jpg',
	alt : '프로모션',
	url : '/html/promotion_intro.html'
},{
	tit : 'ALZI_GPS alarm app.',
	des : 'App design & prototype/ UI/UX',
	img : '/images/ALZI/alzi.jpg',
	alt : 'UI/UX',
	url : '/html/ALZI_intro.html'
},{
	tit : 'NHSung | portfolio',
	des : 'portfolio page / design & develop',
	img : '/images/main/portfolio.jpg',
	alt : 'Portfolio',
	url : '/html/portfolio_intro.html'
}];

$(document).ready(function(){
	//sec3 타이핑 js
	var typed5 = new Typed('#typed5', {
		strings: [
			'원하는 디자인에 맞춰 웹사이트를 제작할 수 있습니다.', 
			'웹표준(HTML5 / CSS3 / jQuery)에 맞춰 퍼블리싱할 수 있습니다.', 
			'반응형 웹사이트를 제작할 수 있습니다.',
			'모바일 웹을 제작할 수 있습니다.',
			'디자인 관련 툴(Ps / Ai)을 사용할 수 있습니다.'
		],
		typeSpeed: 100,
		backSpeed: 20,
		cursorChar: '_',
		shuffle: true,
		smartBackspace: false,
		loop: true
	});
	   
	//work list 
	var ele = '';
	for(var i = 0; i < work_array.length; i++){
		ele +=`
			<a href="${work_array[i].url}" target="_blank">
				<img src="${work_array[i].img}" alt="${work_array[i].alt}">
				<dl>
					<dt>Title</dt>
					<dl>${work_array[i].tit}</dl>
					<dt>Description</dt>
					<dl>${work_array[i].des}</dl>
				</dl>
			</a>
		`
	}

	$('.work_list').append(ele);

	return false;
});

$(document).on('click','.btn_menu', function(){
  $('#gnb').show();
  
  return false;
});

//nav 클릭 시, 스크롤 속도 조절
$('#gnb a').click(function(){
	var target = $(this).attr('href');

	$('html, body').stop().animate({
		scrollTop:$(target).offset().top - $('#content').offset().top
	},300);

	return false;
});

//스크롤 시 nav 색상 변경
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

	$("#gnb a").removeClass("scrolling");

    if (scroll <= 800) {
      $("#gnb a").removeClass("fWhite")
      $("#gnb li:nth-child(1) a").addClass("scrolling");
    } else if (scroll <= 1800) {
      $("#gnb a").removeClass("fWhite")
      $("#gnb li:nth-child(2) a").addClass("scrolling");
    } else if (scroll <= 3740) {
      $("#gnb a").removeClass("fWhite")
      $("#gnb li:nth-child(3) a").addClass("scrolling");
    } else {
      $("#gnb a").addClass("fWhite");
      $("#gnb li:nth-child(4) a").addClass("scrolling");
    }

	return false;
});
