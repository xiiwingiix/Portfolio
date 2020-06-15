
// slide_show
var slideIndex = 0;

function showSlides() {
	var slides		= document.querySelectorAll('.Slides');
	var dots    	= document.getElementsByClassName('dot');
	var cur_page	= document.getElementsByClassName('cur_page')[0];

	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slideIndex++;
	slideIndex = (slideIndex > slides.length) ? 1 : slideIndex;

	for (var i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
	}
	
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += ' active';
	cur_page.innerHTML = slideIndex;

	setTimeout(showSlides, 2000);
}

showSlides();
// slide_show - end 


// get_product 
function get_Product(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://run.mocky.io/v3/b7994ce8-1b02-4891-a501-4f7548bdd006');
	
	// xhr.responseType = 'json';

	xhr.onload = function(){
		var data = JSON.parse(xhr.response)
		var new_pdt = data.new_product;
		var season_pdt = data.season_pdt;
		
		var new_el ='';
		new_pdt.forEach(function(item){
			new_el += '<li class="gSlide">'
			new_el += '	<img src="'+item.imgSrc+'" alt="'+item.alt+'">'
			new_el += '	<p class="tit mt10">'+item.tit+'</p>'
			new_el += '	<p class="txt mt10">'+item.txt+'</p>'
			new_el += '	<p class="price text_brown">\\'+numberFormat(item.price)+'</p>'
			new_el += '</li>'
		});

		var group_slide = document.querySelector('.group_slide');
		group_slide.innerHTML = new_el;

		var season_el = '';
		season_pdt.forEach(function(item){
			season_el += '<div>'
			season_el += '	<img src="'+item.imgSrc+'" alt="'+item.alt+'">'
			season_el += '	<div class="btn_buy">Buy now ></div>'
			season_el += '	<h6>'+item.tit+'</h6>'
			season_el += '	<p class="txt">'+item.txt+'</p>'
			season_el += '	<p class="price">\\'+item.price+'</p>'
			season_el += '</div>'
		});

		var season_list = document.querySelector('.season_pdt .pdt_list');
		season_list.innerHTML = season_el;

	};
	
	xhr.send()
}
get_Product()
// get_new_product : end

// 신상품 슬라이드 이동 
function plusSlides(state) {
	var gSlides 		= document.querySelector('.group_slide');
	var first_slide = gSlides.firstElementChild;
	var last_slide 	= gSlides.lastElementChild;


	if (state == 'prev'){
		gSlides.insertBefore(last_slide,first_slide)
	} else {
		gSlides.appendChild(first_slide)
	}

	return false;
}
// 신상품 슬라이드 이동 : end

// read_more 클릭 
var btn_more = document.querySelector('.btn_more');
btn_more.addEventListener('click', function(){popAlert('더보기','상단 카테고리 중 <span class="bold">플랜트정기구독</span>을 클릭해주세요.')});
// read_more 클릭 :end


