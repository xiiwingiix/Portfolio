
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