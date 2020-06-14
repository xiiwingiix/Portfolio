
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


// get_new_product 
var nProduct_length ;

function get_newProduct(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://run.mocky.io/v3/3ce1e415-175a-48b7-a419-ca24bc401c3e');
	
	// xhr.responseType = 'json';

	xhr.onload = function(){
		var data = JSON.parse(xhr.response)
		var new_pdt = data.new_product;
		
		var el ='';
		new_pdt.forEach(function(item){
			el += '<li class="gSlide">'
			el += '	<img src="'+item.imgSrc+'" alt="'+item.alt+'">'
			el += '	<p class="tit mt10">'+item.tit+'</p>'
			el += '	<p class="txt mt10">'+item.txt+'</p>'
			el += '	<p class="price text_brown">\\'+numberFormat(item.price)+'</p>'
			el += '</li>'
		});

		var group_slide = document.querySelector('.group_slide');
		group_slide.innerHTML = el;

	};
	
	xhr.send()
}
get_newProduct()
// get_new_product : end



function plusSlides(state) {
	var gSlides 		= document.querySelector('.group_slide');
	var first_slide = gSlides.firstElementChild;
	var last_slide 	= gSlides.lastElementChild;


	if (state == 'prev'){
		gSlides.appendChild(first_slide)
	} else {
		gSlides.insertBefore(last_slide,first_slide)
	}

	return false;
}
