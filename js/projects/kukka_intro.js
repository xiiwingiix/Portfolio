
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

showSlides()

function get_newProduct(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://run.mocky.io/v3/3f93c722-e270-4b8f-bf85-85f010d1ccf6');
	
	// xhr.responseType = 'json';

	xhr.onload = function(){
		var data = JSON.parse(xhr.response)
		var new_product = data.new_product;
		
		var el ='';
		new_product.forEach(function(item){
			el += '<li>'
			el += '	<img src="'+item.imgSrc+'" alt="'+item.alt+'">'
			el += '	<p class="tit">'+item.tit+'</p>'
			el += '	<p class="txt">'+item.txt+'</p>'
			el += '	<p class="price">'+item.price+'</p>'
			el += '</li>'
		});

		var group_slide = document.querySelector('.group_slide');
		group_slide.innerHTML = el;
	};
	
	xhr.send()
}

get_newProduct()


// var json = {
// 	"new_product":[{
// 		"imgSrc":"../../../images/kukka/Sansevieria.png",
// 		"alt" : "산세베리아",
// 		"tit" : "Sansevieria",
// 		"txt" : "공기정화식물",
// 		"price" : "3000"
// 	},{
// 		"imgSrc":"../../../images/kukka/RubberPlant.png",
// 		"alt" : "고무나무",
// 		"tit" : "RUBBER Plant",
// 		"txt" : "공기정화식물",
// 		"price" : "4000"
// 	},{
// 		"imgSrc":"../../../images/kukka/goldPepe.png",
// 		"alt" : "황금페페",
// 		"tit" : "Pepe gold",
// 		"txt" : "공기정화식물",
// 		"price" : "3000"
// 	},{
// 		"imgSrc":"../../../images/kukka/HolyPepe.png",
// 		"alt" : "홀리페페",
// 		"tit" : "Holi Pepe",
// 		"txt" : "공기정화식물",
// 		"price" : "3000"
// 	},{
// 		"imgSrc":"../../../images/kukka/Goosefoot.png",
// 		"alt" : "싱고니움",
// 		"tit" : "Syngonium",
// 		"txt" : "공기정화식물",
// 		"price" : "4000"
// 	},{
// 		"imgSrc":"../../../images/kukka/Redpeperomia.png",
// 		"alt" : "홍페페",
// 		"tit" : "Red peperomia",
// 		"txt" : "공기정화식물",
// 		"price" : "3000"
// 	},{
// 		"imgSrc":"../../../images/kukka/stuki.png",
// 		"alt" : "스투키",
// 		"tit" : "stuki",
// 		"txt" : "공기정화식물",
// 		"price" : "3000"
// 	}]
// }

//section3
	var a = 1;
	slide(a);

	function plusSlides(n) {
	  	slide(a += n);
	}

	function currentSlide(n) {
	 	slide(a = n);
	}

	function slide(n) {
	  	var i;
	  	var slides = document.getElementsByClassName("Slides");
	  	if (n > slides.length) {a = 1}
	  	if (n < 1) {a = slides.length}
	  	for (i = 0; i < slides.length; i++) {
	    	  slides[i].style.display = "none";
	  	}
	  slides[a-1].style.display = "block";
	}